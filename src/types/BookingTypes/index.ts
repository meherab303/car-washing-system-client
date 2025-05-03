export type BookingFormData = {
  service: string;
  customer: string;
  slot: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};
export type TBookingSlot = {
  _id: string;
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked?: "available" | "booked" | "canceled";
};
