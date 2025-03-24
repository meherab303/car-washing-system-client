"use client";
import { Button, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FiSave } from "react-icons/fi";
import { Card } from "@heroui/card";

import { updateUserValidationSchema } from "@/src/schemas/updateProfile.schemas";
import { getToken } from "@/src/utils/getToken";
import { useUser } from "@/src/context/user.provider";
import envConfig from "@/src/config/envConfig";
import { useUserProfileUpdate } from "@/src/hooks/user.hook";
import UpdateProfileSkeleton from "@/src/components/modules/UI/UpdateProfileSkeleton";

// Validation Schema
type UpdateUserData = z.infer<typeof updateUserValidationSchema>;

const UpdateProfile = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await getToken();

        const res = await fetch(`${envConfig.baseApi}/users/getMe`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await res.json();
        setUserData(data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user?.userEmail) {
      fetchUserData();
    }
  }, [user?.userEmail]);

  // Use defaultValues dynamically only after userData is available
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdateUserData>({
    resolver: zodResolver(updateUserValidationSchema),
    defaultValues: userData ? { body: userData } : undefined, // Set defaultValues once userData is available
  });


  useEffect(() => {
    if (userData) {
      // Dynamically populate the form fields with userData
      Object.keys(userData).forEach((key) => {
        setValue(`body.${key as keyof UpdateUserData['body']}`, userData[key]);
      });
    }
  }, [userData, setValue]);

  const { mutate: handleUpdateUser, isPending } = useUserProfileUpdate();

  const onSubmit = (data: UpdateUserData) => {
    const payload = data.body;

    handleUpdateUser({ _id: userData._id, payload });
  };

  if (!userData) {
    return <UpdateProfileSkeleton/>; // Show a loading state while data is being fetched
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Update Profile</h1>
      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input {...register("body.name")} className="w-full" />
            {errors.body?.name && <p className="text-red-500 text-sm">{errors.body?.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input {...register("body.email")} className="w-full" disabled /> {/* Disable email */}
            {errors.body?.email && <p className="text-red-500 text-sm">{errors.body?.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="text-sm font-medium">Phone</label>
            <Input {...register("body.phone")} className="w-full" />
            {errors.body?.phone && <p className="text-red-500 text-sm">{errors.body?.phone.message}</p>}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="text-sm font-medium">Address</label>
            <Input {...register("body.address")} className="w-full" />
            {errors.body?.address && <p className="text-red-500 text-sm">{errors.body?.address.message}</p>}
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="text-sm font-medium">Role</label>
            <Input {...register("body.role")} className="w-full" disabled /> {/* Disable role */}
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end">
            <Button type="submit" disabled={isPending} className="flex items-center gap-2">
              <FiSave size={18} /> {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UpdateProfile;
