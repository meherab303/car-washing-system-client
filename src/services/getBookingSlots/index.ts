import envConfig from "@/src/config/envConfig";

export const getBookingSlots = async (serviceId: string) => {
  const res = await fetch(
    `${envConfig.baseApi}/bookingSlot?serviceId=${serviceId}`,
  );

  return res.json();
};
