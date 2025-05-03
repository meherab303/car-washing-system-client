/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { updateUserValidationSchema } from "@/src/schemas/updateProfile.schemas";
import { useUser } from "@/src/context/user.provider";
import { useGetUserData, useUserProfileUpdate } from "@/src/hooks/user.hook";
import UpdateProfileSkeleton from "@/src/components/modules/UI/UpdateProfileSkeleton";
import { TGetUser } from "@/src/types/getUserType";
import UpdateProfileForm from "@/src/components/modules/UserDashboard/UpdateProfileForm";

// Validation Schema
type UpdateUserData = z.infer<typeof updateUserValidationSchema>;

const UpdateProfile = () => {
  const { user } = useUser();
  const [isFormChanged, setIsFormChanged] = useState(false);
  const { data: userData, isLoading } = useGetUserData(user?.userEmail);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm<UpdateUserData>({
    resolver: zodResolver(updateUserValidationSchema),
    defaultValues: userData ? { body: userData } : undefined,
  });

  useEffect(() => {
    if (userData) {
      type BodyKeys = keyof UpdateUserData["body"]; // Extract valid keys

      (Object.keys(userData) as BodyKeys[]).forEach((key) => {
        const value = userData[key as keyof TGetUser];

        // Ensure the value is a string or undefined, or convert it if necessary
        if (typeof value === "string" || value === undefined) {
          setValue(`body.${key}` as `body.${BodyKeys}`, value);
        }
        // Handle other types such as number or boolean by converting to string if necessary
        else if (typeof value === "number" || typeof value === "boolean") {
          setValue(`body.${key}` as `body.${BodyKeys}`, value.toString());
        }
      });
    }
  }, [userData, setValue]);

  // Keep track if any field value is changed
  useEffect(() => {
    setIsFormChanged(Object.keys(dirtyFields.body || {}).length > 0);
  }, [dirtyFields]);

  const { mutate: handleUpdateUser, isPending } = useUserProfileUpdate();

  const onSubmit = (data: UpdateUserData) => {
    const payload = data.body;

    handleUpdateUser({ _id: userData?._id as string, payload });
  };

  if (isLoading || !userData) {
    return <UpdateProfileSkeleton />;
  }

  return (
    <UpdateProfileForm
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isFormChanged={isFormChanged}
      isPending={isPending}
    />
  );
};

export default UpdateProfile;
