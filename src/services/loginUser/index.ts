/* eslint-disable prettier/prettier */
"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

import axiosInstance from "@/src/lib/AxiosInstance";
import envConfig from "@/src/config/envConfig";



export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`${envConfig.baseApi}/auth/login`, userData, {
      withCredentials: true,
    });

    if (data.success) {
        const cookieStore= await cookies()
      
        cookieStore.set("accessToken", data?.data?.accessToken);

        cookieStore.set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
