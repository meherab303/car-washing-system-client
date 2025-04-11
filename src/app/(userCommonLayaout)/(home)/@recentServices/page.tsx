/* eslint-disable prettier/prettier */

import CarServiceCard from "@/src/components/carServiceCard";
import SeeAll from "@/src/components/modules/home/seeAll";
import Container from "@/src/components/modules/UI/container";
import getCarService from "@/src/services/carServices";
import { TService } from "@/src/types/carServiceTypes";

export default async function Servicesss() {
  const { data: services } = await getCarService();

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recent Services</h2>
        <p className="text-center">
        Explore our latest car wash services completed with care and precision.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 place-items-center">
        {services.slice(0, 3).map((service: TService) => (
          <CarServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className=" mb-5">
        <SeeAll />
      </div>
    </Container>
  );
}
