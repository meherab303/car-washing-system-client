/* eslint-disable prettier/prettier */
"use client";

import { Button, Card, CardBody, Image } from "@heroui/react";
import { TService } from "../types/carServiceTypes";
import { SlotBooking } from "../types/slotBookingTypes";
import AvailableSlots from "./modules/service/AvailableSlots";
import { useRouter } from "next/navigation";

const ServiceDetailsCard = ({
  service,
  slots,
}: {
  service: TService;
  slots: SlotBooking[];
}) => {
  const router = useRouter();
  const { _id, name, description, duration, price } = service;

  const handleBooking = () => {
    router.push(
      `/services/${_id}/booking?serviceId=${_id}&slotId=${slots[0]._id}&serviceName=${encodeURIComponent(
        name,
      )}&duration=${duration}&price=${price}`,
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 mt-10 animate-fadeIn">
      {/* Left: Service Image */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-xl transform transition-transform duration-400 hover:scale-105">
        <Image
          alt={name}
          className="w-full h-96 object-cover rounded-xl"
          src={"https://heroui.com/images/hero-card-complete.jpeg"}
        />
      </div>

      {/* Right: Service Details */}
      <div className="w-full md:w-1/2 animate-slideInRight delay-200">
        <Card className="w-full h-96 max-w-4xl mx-auto flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
          <CardBody className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-default-800 transform transition-transform duration-300 scale-100">
              {name}
            </h2>
            <p className="text-default-600 mt-2 transition-opacity duration-300 opacity-100">
              {description}
            </p>
            <p className="text-lg font-semibold text-blue-500 mt-2 transform transition-transform duration-500">
              Price: ${price}
            </p>
            <p className="text-sm text-default-600 transform transition-transform duration-500">
              Duration: {duration} mins
            </p>

            {/* Time Slot Selection */}
            <div className="mt-4 opacity-100 transition-opacity duration-500">
              <AvailableSlots slots={slots} />
            </div>

            {/* Booking Button with Hover Effect */}
            <div className="mt-4 transition-transform duration-300 hover:scale-105">
              <Button
                className="relative w-full bg-blue-700 text-white font-semibold overflow-hidden transition-all duration-500 ease-in-out
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-700 before:to-purple-700 
                before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10 
                z-10"
                isDisabled={slots.length === 0}
                onPress={handleBooking}
              >
                Book This Service
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
