"use client";

import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { Input, Select, SelectItem, Button, Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Image } from "@heroui/image";

import { useBookingSlots, useCreateBooking, useGetUserData } from "@/src/hooks/user.hook";

import { BookingFormData, TBookingSlot } from "@/src/types/BookingTypes";
import { useUser } from "@/src/context/user.provider";
import BookingPageForm from "@/src/components/modules/booking/BookingPageForm";
import NoBookingDataAvailable from "@/src/components/modules/booking/NoBookingDataAvailable";

const BookingPage = () => {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("serviceId");
  const serviceName = searchParams.get("serviceName");
  const duration = searchParams.get("duration");
  const price = searchParams.get("price");
  const serviceImage = searchParams.get("serviceImage");
  const { user } = useUser();
  const { data: userData } = useGetUserData(user?.userEmail);

  const searchParamsInfo={
    serviceId,
    serviceName,
    duration,
    price,
    serviceImage,
    userData
  }
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingFormData>();

  // Fetch available slots dynamically
  const { data: slots = [], isLoading}= useBookingSlots(serviceId as string);
  const { mutate:handleBooking,isPending,isSuccess} = useCreateBooking();
  
const formdetails={
  searchParamsInfo,
  handleSubmit,register,control,  formState: { errors },
  handleBooking,
  slots

}

 if(isLoading){
  return <p>loading</p>
}

if (isPending) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/30 flex flex-col items-center">
        <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full"></div>
        <p className="mt-4 text-lg font-semibold text-gray-200">Loading...</p>
      </div>
    </div>
  );
}
return searchParamsInfo.serviceId && searchParamsInfo.userData ? (
  <BookingPageForm formdetails={formdetails} />
) : (
  <NoBookingDataAvailable/>
);
};

export default BookingPage;
