/* eslint-disable prettier/prettier */
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@heroui/react";

import { TService } from "../types/carServiceTypes";

const CarServiceCard = ({ service }: { service: TService }) => {
  const { _id, name, description, price } = service;
  const router = useRouter();

  // Using useRef to track mouse movement for better performance (avoiding re-renders)
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Handle mouse movement for 3D effect


  const handleMouseLeave = () => {
    if (cardRef.current) {
      // Adding a smooth transition to the reset transform on mouse leave
      cardRef.current.style.transition = "transform 0.3s ease-out";
      cardRef.current.style.transform = "rotateX(0) rotateY(0)";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.07,
        boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      ref={cardRef}
   
      onMouseLeave={handleMouseLeave}
    >
      <Card className="w-full max-w-[320px] p-3 shadow-lg transition-shadow cursor-pointer relative overflow-hidden">
        {/* Glowing Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.4 }}
        />

        <CardHeader className="pb-0 relative">
          <motion.h2
            className="text-xl font-semibold"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {name}
          </motion.h2>
        </CardHeader>

        <CardBody className="relative">
          {/* Parallax Image Effect */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              alt={name}
              className="w-full h-[180px] object-cover rounded-lg"
              src="https://heroui.com/images/hero-card-complete.jpeg"
            />
          </motion.div>
          <p className="text-gray-600 mt-2">{description}</p>
        </CardBody>

        <CardFooter className="flex justify-between items-center relative">
          <p className="font-bold text-blue-500">${price}</p>

          {/* Button with Ripple Effect */}
          <motion.div>
            <Button
              className="bg-transparent hover:bg-slate-800 hover:text-white relative overflow-hidden rounded-full"
              size="sm"
              variant="bordered"
              onPress={() => router.push(`/services/${_id}`)}
            >
              Details
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CarServiceCard;
