import envConfig from "@/src/config/envConfig";
import { TBooking } from "@/src/types/getMyBookingsType";
import { getToken } from "@/src/utils/getToken";

export const getAllBookings = async (): Promise<TBooking[]> => {
  const token = getToken();

  const response = await fetch(`${envConfig.baseApi}/bookings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch bookings");
  }

  const data = await response.json();
  return data?.data;
};
