/* eslint-disable prettier/prettier */

"use client";

 import {Card, CardHeader, CardBody, Image, CardFooter, Button} from "@heroui/react";

import { TService } from "../types/carServiceTypes";

const CarServiceCard = ({service}:{service:TService}) => {
  return (
    <Card className="w-full max-w-[320px] p-3 shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="pb-0">
        <h2 className="text-xl font-semibold">{service.name}</h2>
      </CardHeader>

      <CardBody>
        <Image
          alt={service.name}
          className="w-full h-[180px] object-cover rounded-lg"
          src="https://heroui.com/images/hero-card-complete.jpeg"
        />
        <p className="text-gray-600 mt-2">{service.description}</p>
      </CardBody>

      <CardFooter className="flex justify-between items-center">
        <p className="font-bold text-blue-500">${service.price}</p>
        <Button className="bg-transparent hover:bg-slate-800 hover:text-white hover:transition-all hover:duration-1000 ease-in-out" radius="full" size="sm"  variant="bordered"   >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarServiceCard;

