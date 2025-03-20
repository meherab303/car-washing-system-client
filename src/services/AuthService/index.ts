/* eslint-disable prettier/prettier */
import envConfig from "@/src/config/envConfig";
import { cookies } from "next/headers";

import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const createUser = async (userData) => {
  const response = await fetch(`${envConfig.baseApi}/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return await response.json();
};
export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(
      `${envConfig.baseApi}/auth/login`,
      userData,
      {
        withCredentials: true,
      },
    );

    if (data.success) {
      const cookieStore = await cookies();

      cookieStore.set("accessToken", data?.data?.accessToken);

      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const getCurrentUser = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      role: decodedToken.role,
      // status: decodedToken.status,
      // profilePhoto: decodedToken.profilePhoto,
    };
  }

  return decodedToken;
};

export const logout = () => {
  const cookieStore = cookies();

  cookies().delete("accessToken");
  cookieStore.delete("refreshToken");
};
