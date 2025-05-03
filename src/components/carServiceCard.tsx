/* eslint-disable prettier/prettier */
"use client";

import { useRouter } from "next/navigation";
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
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.3s ease-out";
      cardRef.current.style.transform = "rotateX(0) rotateY(0)";
    }
  };

  return (
    <div
      className="transition transform hover:scale-105 hover:shadow-2xl duration-300 ease-out relative"
      ref={cardRef}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="w-full max-w-[320px] p-3 shadow-lg cursor-pointer relative overflow-hidden">
        {/* Glowing Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-400 pointer-events-none z-0 rounded-lg" />

        <CardHeader className="pb-0 relative z-10">
          <h2 className="text-xl font-semibold transition-transform duration-200 hover:scale-105">
            {name}
          </h2>
        </CardHeader>

        <CardBody className="relative z-10">
          <div className="transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
            <Image
              alt={name}
              className="w-full h-[180px] object-cover rounded-lg"
              src="https://heroui.com/images/hero-card-complete.jpeg"
            />
          </div>
          <p className="text-gray-600 mt-2">{description}</p>
        </CardBody>

        <CardFooter className="flex justify-between items-center relative z-10">
          <p className="font-bold text-blue-500">${price}</p>
          <Button
            className="bg-transparent hover:bg-slate-800 hover:text-white transition-all duration-200 rounded-full"
            size="sm"
            variant="bordered"
            onPress={() => router.push(`/services/${_id}`)}
          >
            Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CarServiceCard;
