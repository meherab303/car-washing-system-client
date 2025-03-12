import { TService } from "../carServiceTypes";

/* eslint-disable prettier/prettier */
export type SlotBooking = {
    _id: string;
    service: TService; // Adjust based on the actual structure of `service`
    date: string; // Format: 'YYYY-MM-DD'
    startTime: string; // Format: 'HH:mm'
    endTime: string; // Format: 'HH:mm'
    isBooked: 'available' | 'booked'; // Assuming 'available' and 'booked' are possible value
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  };