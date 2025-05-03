import envConfig from "@/src/config/envConfig";
import { getToken } from "@/src/utils/getToken";
import axios from "axios";

export const getMyBookings = async () => {
  const token = getToken();
  const response = await axios.get(
    `${envConfig.baseApi}/bookings/my-bookings`,
    {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    },
  );

  return response.data.data;
};
