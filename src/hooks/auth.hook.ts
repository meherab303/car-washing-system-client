import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import createUser from "../services/createUser";
import { loginUser } from "../services/loginUser";
import { forgetPassword } from "../services/forgetPassword";

interface RegisterResponse {
  success: boolean;
  message?: string;
  errorSource?: { message: string }[];
}

export const useUserRegistration = () => {
  const router = useRouter();

  return useMutation<RegisterResponse, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => {
      return await createUser(userData); // Call API
    },
    onSuccess: (result) => {
      if (result.success == true) {
        toast.success("🎉 Registration successful!", {
          position: "top-right",
          duration: 3000,
        });
        router.push("/login");
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

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => {
      return await loginUser(userData); // Call API
    },
    onSuccess: (result) => {
      console.log(result, "inside hook result");
      if (result.success == true) {
        toast.success("🎉 Login successful!", {
          position: "top-right",
          duration: 3000,
        });
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



export const useForgetPassword = () => {
  return useMutation({
    mutationFn: forgetPassword,
    onSuccess: () => {
      toast.success("Reset link sent to your email.");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to send reset link");
    },
  });
};

