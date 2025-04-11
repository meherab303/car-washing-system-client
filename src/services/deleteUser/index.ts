import envConfig from "@/src/config/envConfig";
import { getToken } from "@/src/utils/getToken";


export const deleteUser = async (userId: string) => {

 const token = getToken();

  const response = await fetch(`${envConfig.baseApi}/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },

  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return await response.json();
};
