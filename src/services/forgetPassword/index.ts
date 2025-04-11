// src/services/auth/forgetPassword.ts
import envConfig from "@/src/config/envConfig";

export const forgetPassword = async (email: string) => {
  const res = await fetch(`${envConfig.baseApi}/auth/forget-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.message || "Something went wrong");
  }

  return await res.json();
};
