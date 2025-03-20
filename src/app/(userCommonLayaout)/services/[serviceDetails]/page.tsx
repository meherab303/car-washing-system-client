/* eslint-disable prettier/prettier */

import { notFound } from "next/navigation";

import getSingleCarService from "@/src/services/singleCarService";
import ServiceDetailsCard from "@/src/components/serviceDetailsCard";
import envConfig from "@/src/config/envConfig";

export default async function ServiceDetails({
  params,
}: {
  params: { serviceDetails: string };
}) {
  const serviceId = (await params).serviceDetails;

  const { data: service } = await getSingleCarService(serviceId);

  const res = await fetch(
    `${envConfig.baseApi}/bookingSlot?serviceId=${serviceId}`,
  );
  const { data: slots } = await res.json();

  if (!slots) return notFound();

  if (!service) return notFound(); // Show 404 if service not found

  return (
    <div className="max-w-2xl mx-auto p-6">
      <ServiceDetailsCard service={service} slots={slots} />
    </div>
  );
}
