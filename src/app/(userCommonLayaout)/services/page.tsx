/* eslint-disable prettier/prettier */

import CarServiceCard from "@/src/components/carServiceCard";
import Container from "@/src/components/modules/UI/container";
import getCarService from "@/src/services/carServices";
import { TService } from "@/src/types/carServiceTypes";

export default async function Servicesss() {
  const { data: services } = await getCarService();

  if (!services) {
    throw new Error("no service found ");
  }

  return (
    <Container>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 place-items-center">
        {services?.map((service: TService) => (
          <CarServiceCard key={service._id} service={service} />
        ))}
      </div>
    </Container>
  );
}
