/* eslint-disable prettier/prettier */
import envConfig from "@/src/config/envConfig";
import { BookingFormData } from "@/src/types/BookingTypes";
import { getToken } from "@/src/utils/getToken";
import axios from "axios";

export const createBooking=async(bookingData:BookingFormData)=>{
    const token= getToken()
    const response = await axios.post(`${envConfig.baseApi}/bookings/create-booking`, bookingData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`, // Include token in headers
        },
      });

      return response.data; // Assuming the response has the data you want
    }
