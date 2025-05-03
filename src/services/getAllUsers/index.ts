import envConfig from "@/src/config/envConfig";
import { getToken } from "@/src/utils/getToken";

export const getAllUsers = async () => {
  try {
    const token = getToken();

    const response = await fetch(`${envConfig.baseApi}/users`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch users");

    const data = await response.json();
    return data.data; // Returning the user list
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // Return empty array in case of error
  }
};
