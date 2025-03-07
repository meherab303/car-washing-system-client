/* eslint-disable prettier/prettier */

import CarServiceCard from "@/src/components/carServiceCard";
import getCarService from "@/src/services/carServices";
import { TService } from "@/src/types/carServiceTypes";


export default async function Servicesss() {
    const {data:services}=await getCarService()

 

  return (
    <section >
        <div className="grid grid-cols-3 ">
        {services.map((service:TService) => (
        <CarServiceCard key={service._id} service={service} />
    ))}
        </div>
    </section>
  );
}
