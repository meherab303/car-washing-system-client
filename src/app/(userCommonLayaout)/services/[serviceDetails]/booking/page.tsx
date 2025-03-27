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
    <p>loading....</p>
  );
}
return searchParamsInfo.serviceId && searchParamsInfo.userData ? (
  <BookingPageForm formdetails={formdetails} />
) : (
  <NoBookingDataAvailable/>
);
};

export default BookingPage;
