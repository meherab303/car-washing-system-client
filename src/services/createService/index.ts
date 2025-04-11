import envConfig from "@/src/config/envConfig";
import { TService } from "@/src/types/carServiceTypes";
import { getToken } from "@/src/utils/getToken";


export const createService = async (data: TService) => {
  const token = getToken();

  const res = await fetch(`${envConfig.baseApi}/services/create-service`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.message || "Failed to create service");
  }

  return await res.json();
};
