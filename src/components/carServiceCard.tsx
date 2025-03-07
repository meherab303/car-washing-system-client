/* eslint-disable prettier/prettier */
"use client"

import {Card, CardHeader, CardBody, Image} from "@heroui/react";

import { TService } from "../types/carServiceTypes";
import { Button } from "@heroui/button";

export default function  CarServiceCard({service}:{service:TService}) {
  return (
    <Card className="py-4 gap-4 my-5 mx-5 ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <div className=" flex justify-between items-center w-full">
      <h4 className="font-bold text-large">{service?.name}</h4>
      <Button className=" text-tiny">Details</Button>
      </div>
       
       <p className="text-tiny uppercase font-bold">{service?.price}$</p>
      
    
        <small className="text-default-500">{service?.duration}min</small>
       
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          
        />
      </CardBody>
    </Card>
  );
}
