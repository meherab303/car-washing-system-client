/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {  getUserData, updateUser } from "../services/updateUser";
import { TUpdateUser} from "../types/updateUserType";
import { TGetUser } from "../types/getUserType";
import { getMyBookings } from "../services/getMybookings";
import { TBooking } from "../types/getMyBookingsType";
 

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

export const useGetUserData = (userEmail?: string | null) => {
  return useQuery<TGetUser, Error>({
    queryKey: ["USER_PROFILE"],
    queryFn: async () => {
      const data = await getUserData();
      
      if (!data) throw new Error("User data not found"); // Explicitly throw an error
      return data;
    },
    enabled: !!userEmail, // Ensures query runs only if userEmail exists
    retry: 1, // Retries once on failure
  });
};

export const useGetUserMyBookings = (userEmail?: string | null) => {
  return useQuery<TBooking[], Error>({
    queryKey: ["USER_MY_BOOKINGS"], // Unique query key
    queryFn: async () => {
      const data = await getMyBookings();
      console.log(data,"datta")

      if (!data) throw new Error("booking data not found"); // Explicitly throw an error
      return data;
    }, 
    enabled: !!userEmail, 
    retry: 1, 
  });
};
