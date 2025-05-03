/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { getUserData, updateUser } from "../services/updateUser";
import { TUpdateUser, TUser } from "../types/updateUserType";
import { TGetUser } from "../types/getUserType";
import { getMyBookings } from "../services/getMybookings";
import { TBooking } from "../types/getMyBookingsType";
import { getBookingSlots } from "../services/getBookingSlots";
import { BookingFormData } from "../types/BookingTypes";
import { createBooking } from "../services/createBooking";
import { getAllUsers } from "../services/getAllUsers";
import { deleteUser } from "../services/deleteUser";
import { getAllBookings } from "../services/getAllBookings";

export const useUserProfileUpdate = () => {
  const router = useRouter();
  return useMutation<any, Error, TUpdateUser>({
    mutationKey: ["USER_PROFILE_UPDATE"],
    mutationFn: async ({ _id, payload }) => {
      return await updateUser({ _id, payload });
    },
    onSuccess: () => {
      toast.success("Profile updated successfully!");
      router.push("/dashboard/profile");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to update profile");
    },
  });
};

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
      console.log(data, "datta");

      if (!data) throw new Error("booking data not found"); // Explicitly throw an error
      return data;
    },
    enabled: !!userEmail,
    retry: 1,
  });
};
export const useGetAllBookings = () => {
  return useQuery<TBooking[], Error>({
    queryKey: ["USER_ALL_BOOKINGS"], // Unique query key
    queryFn: async () => {
      const data = await getAllBookings();
      console.log(data, "all bookings");

      if (!data) throw new Error("booking data not found"); // Explicitly throw an error
      return data;
    },
    initialData: [],
    retry: 1,
  });
};

export const useBookingSlots = (serviceId?: string) => {
  return useQuery({
    queryKey: ["bookingSlots", serviceId],
    queryFn: async () => {
      if (!serviceId) throw new Error("No service ID provided");
      const { data } = await getBookingSlots(serviceId);
      return data;
    },
    enabled: !!serviceId, // Only run query when serviceId is available
  });
};

export const useCreateBooking = () => {
  const router = useRouter();

  return useMutation<any, Error, BookingFormData>({
    mutationKey: ["CREATE_BOOKING"],
    mutationFn: async (bookingData) => {
      return await createBooking(bookingData);
    },
    onSuccess: () => {
      toast.success("Booking created successfully!");
      router.push("/dashboard/my-bookings");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message == "Validation error"
          ? error?.response?.data?.message
          : "Failed to create booking",
      );
    },
  });
};

export const useGetAllUsers = () => {
  return useQuery<TUser[], Error>({
    queryKey: ["ALL_USERS"], // Unique query key for fetching users
    queryFn: async () => {
      const data = await getAllUsers(); // Fetch all users
      if (!data) throw new Error("Users not found");
      console.log(data, "getAll user ata"); // Explicitly throw an error if no data is found
      return data;
    },
    initialData: [],
    enabled: true, // Ensures the query is always enabled
    retry: 1, // Retry once in case of failure
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["DELETE_USER"],
    mutationFn: async (userId: string) => {
      return await deleteUser(userId); // Call delete service
    },
    onSuccess: () => {
      toast.success("User deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["ALL_USERS"] }); // Invalidate to refetch users
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to delete user");
    },
  });
};
