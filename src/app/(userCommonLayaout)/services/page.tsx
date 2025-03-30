/* eslint-disable prettier/prettier */

import CarServiceCard from "@/src/components/carServiceCard";
import Container from "@/src/components/modules/UI/container";
import getCarService from "@/src/services/carServices";
import { TService } from "@/src/types/carServiceTypes";

export default async function Servicesss() {
  const { data: services } = await getCarService();

  if (!services) {
    throw new Error("No service found");
  }

  return (
    <Container>
      {/* Hero Section */}
      <div className="text-center  ">
        <h1 className="text-4xl font-bold mb-2 text-default-600"><span className="text-blue-500">Premium </span>Car Services</h1>
        <p className="text-sm md:text-base font-medium text-default-600">Quality care for your car, anytime, anywhere!</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 place-items-center">
        {services?.map((service: TService) => (
          <CarServiceCard key={service._id} service={service} />
        ))}
      </div>
    </Container>
  );
}
