/* eslint-disable prettier/prettier */

import { notFound } from "next/navigation";

import getSingleCarService from "@/src/services/singleCarService";
import ServiceDetailsCard from "@/src/components/serviceDetailsCard";

import { getBookingSlots } from "@/src/services/getBookingSlots";

export default async function ServiceDetails({
  params,
}: {
  params: { serviceDetails: string };
}) {
  const serviceId = ( await params).serviceDetails;

  const { data: service } = await getSingleCarService(serviceId);
  const { data: slots } = await getBookingSlots(serviceId);
  

  if (!slots) return notFound();

  if (!service) return notFound(); 

  return (
    <div className="max-w-2xl mx-auto p-6">
      <ServiceDetailsCard service={service} slots={slots} />
    </div>
  );
}
