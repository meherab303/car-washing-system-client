/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { updateUser } from "../services/updateUser";

import { TUpdateUser } from "../types/updateUserType";
 

export const useUserProfileUpdate=()=>{
    const router = useRouter();
    return useMutation<any, Error,TUpdateUser>({
        mutationKey: ["USER_PROFILE_UPDATE"],
        mutationFn:async ({_id,payload}) => {
              return await updateUser({_id,payload});
            },
        onSuccess: () => {
          toast.success("Profile updated successfully!");
          router.push("/dashboard/profile");
        },
        onError: (error: any) => {
          toast.error(error?.response?.data?.message || "Failed to update profile");
        },
      });
}
