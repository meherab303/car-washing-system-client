/* eslint-disable prettier/prettier */
"use client";

import { Button, Card, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { TService } from "../types/carServiceTypes";
import { SlotBooking } from "../types/slotBookingTypes";
import AvailableSlots from "./modules/service/AvailableSlots";
import { useParams, useRouter } from "next/navigation";

const ServiceDetailsCard = ({
  service,
  slots,
}: {
  service: TService;
  slots: SlotBooking[];
}) => {
  const router = useRouter();
  const { _id,name, description, duration, price } = service;

const handleBooking = () => {
  router.push(
    `/services/${_id}/booking?serviceId=${_id}&slotId=${slots[0]._id}&serviceName=${encodeURIComponent(name)}&duration=${duration}&price=${price}`
  );
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row gap-5 mt-10"
    >
      {/* Left: Service Image */}
      <motion.div
        className="w-full md:w-1/2 overflow-hidden rounded-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          alt={name}
          className="w-full h-96 object-cover rounded-xl"
          src={"https://heroui.com/images/hero-card-complete.jpeg"}
        />
      </motion.div>

      {/* Right: Service Details */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="w-full h-96 max-w-4xl mx-auto flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
          <CardBody className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <motion.h2
              className="text-2xl font-bold text-default-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {name}
            </motion.h2>
            <motion.p
              className="text-default-600 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {description}
            </motion.p>
            <motion.p
              className="text-lg font-semibold text-blue-500 mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Price: ${price}
            </motion.p>
            <motion.p
              className="text-sm text-default-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Duration: {duration} mins
            </motion.p>

            {/* Time Slot Selection */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <AvailableSlots slots={slots} />
            </motion.div>

            {/* Booking Button with Hover Effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                className="relative mt-4 w-full bg-blue-700 text-white font-semibold overflow-hidden transition-all duration-900 ease-in-out
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-700 before:to-purple-700 
                before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-900 before:-z-10 
                z-10"
                isDisabled={slots.length === 0}
                onPress={handleBooking}
              >
                Book This Service
              </Button>
            </motion.div>
          </CardBody>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ServiceDetailsCard;
