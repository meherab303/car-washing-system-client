/* eslint-disable prettier/prettier */
import { Card, CardBody } from "@heroui/card";
import { notFound } from "next/navigation";

import getSingleCarService from "@/src/services/singleCarService";



export default async function ServiceDetails({ params }: { params: { serviceDetails: string } }) {
    const {data:service}= await getSingleCarService(params.serviceDetails);
    
  
    if (!service) return notFound(); // Show 404 if service not found
  
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="shadow-lg">
          <CardBody>
            <h2 className="text-2xl font-semibold">{service.name}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <p className="text-lg font-semibold mt-2">Price: ${service.price}</p>
            <p className="text-sm text-gray-500">Duration: {service.duration} mins</p>
  
            {/* Time Slot Selection */}
            {/* <AvailableSlots service={service} /> */}
          </CardBody>
        </Card>
      </div>
    );
  }