// Type for the Slot
type Slot = {
  _id: string;
  service: string;
  date: string; // Assuming date is in string format (e.g., "2025-06-15")
  startTime: string; // Assuming time is in string format (e.g., "11:30")
  endTime: string; // Assuming time is in string format (e.g., "12:20")
  isBooked: string; // e.g., "booked"
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Type for the Service
type Service = {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // Assuming this is the duration in minutes
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Type for the Customer
type Customer = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string; // e.g., "user"
  address: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Type for the Booking with Countdown
export type TBooking = {
  _id: string;
  customer: Customer;
  service: Service;
  slot: Slot;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  countdown: Countdown;
};

// Type for the Countdown
type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
