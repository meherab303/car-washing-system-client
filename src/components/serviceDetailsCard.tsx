/* eslint-disable prettier/prettier */
"use client";
import { Button, Card, CardBody, Image } from "@heroui/react";

import { TService } from "../types/carServiceTypes";
import { SlotBooking } from "../types/slotBookingTypes";

import AvailableSlots from "./modules/service/AvailableSlots";

const ServiceDetailsCard = ({
  service,
  slots,
}: {
  service: TService;
  slots: SlotBooking[];
}) => {
  const { name, description, duration, price } = service;

  return (
    <div className="flex flex-col md:flex-row gap-5 mt-10 ">
      <div className="w-full md:w-1/2 ">
        <Image
          alt={name}
          className="w-full h-96 object-cover "
          src={"https://heroui.com/images/hero-card-complete.jpeg"}
        />
      </div>
      <div>
        <Card className="w-full h-96 max-w-4xl mx-auto flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
          {/* Left: Service Image */}

          {/* Right: Service Details */}
          <CardBody className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-default-800">{name}</h2>
            <p className="text-default-600 mt-2">{description}</p>
            <p className="text-lg font-semibold text-blue-500 mt-2">
              Price: ${price}
            </p>
            <p className="text-sm text-default-600">
              Duration: {duration} mins
            </p>
            {/* Time Slot Selection */}
            <div>
              <AvailableSlots slots={slots} />
            </div>

            <Button
              className="relative mt-4 w-full bg-blue-700 text-white font-semibold overflow-hidden transition-all duration-900 ease-in-out
before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-700 before:to-purple-700 
before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-900 before:-z-10 
z-10"
              isDisabled={slots.length === 0}
            >
              Book This Service
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
