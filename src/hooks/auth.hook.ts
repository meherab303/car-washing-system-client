import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

import createUser from "../services/createUser";

interface RegisterResponse {
    success: boolean;
    message?: string;
    errorSource?: { message: string }[];
  }

export const useUserRegistration = () => {
    return useMutation<RegisterResponse, Error, FieldValues>({
      mutationKey: ["USER_REGISTRATION"],
      mutationFn: async (userData) => {
        return await createUser(userData); // Call API
      },
      onSuccess: (result) => {
        console.log(result,"inside hook result")
        if (result.success==true) {
          toast.success("🎉 Registration successful!", {
            position: "top-right",
            duration: 3000,
          })
          ;
        } else {
          toast.error(result.errorSource?.[0]?.message || "Registration failed", {
            position: "top-right",
            duration: 3000,
          });
        }
      },
      onError: (error) => {
        toast.error(error.message || "Something went wrong", {
          position: "top-right",
          duration: 3000,
        });
       },
     });
  };
  
