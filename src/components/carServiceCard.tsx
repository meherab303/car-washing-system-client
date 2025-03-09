/* eslint-disable prettier/prettier */
"use client";



import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@heroui/react";

import { TService } from "../types/carServiceTypes";



const CarServiceCard = ({ service }: { service: TService }) => {
  const { _id, name, description, price } = service;
  const router = useRouter();

  return (
    <Card
      className="w-full max-w-[320px] p-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
     
    >
      <CardHeader className="pb-0">
        <h2 className="text-xl font-semibold">{name}</h2>
      </CardHeader>

      <CardBody>
        <Image
          alt={name}
          className="w-full h-[180px] object-cover rounded-lg"
          src="https://heroui.com/images/hero-card-complete.jpeg"
        />
        <p className="text-gray-600 mt-2">{description}</p>
      </CardBody>

      <CardFooter className="flex justify-between items-center">
        <p className="font-bold text-blue-500">${price}</p>
        <Button  className="bg-transparent hover:bg-slate-800 hover:text-white" radius="full" size="sm" variant="bordered"  onPress={() => router.push(`/services/${_id}`)} >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarServiceCard;
