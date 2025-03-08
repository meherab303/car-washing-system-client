// /* eslint-disable prettier/prettier */

// import { Button } from "@heroui/react";
// import Link from "next/link";

// import Container from "@/src/components/modules/UI/container";
// import getCarService from "@/src/services/carServices";
// import CarServiceCard from "@/src/components/carServiceCard";
// import { TService } from "@/src/types/carServiceTypes";


// export default async function RecentServices() {
//   const {data:services}=await getCarService()

//   return (
//     <Container>
    //   <div className="section-title my-8">
    //     <h2 className="mb-2 text-center text-2xl">Recent Services</h2>
    //     <p className="text-center">
    //       A list of items that have been recently found and reported.
    //     </p>
    //   </div>
//       <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
    
//       {services.slice(0,3).map((service:TService) => (
//         <CarServiceCard key={service._id} service={service} />
//     ))}
//       </div>
    
//     </Container>
//   );
// }

/* eslint-disable prettier/prettier */

import CarServiceCard from "@/src/components/carServiceCard";
import SeeAll from "@/src/components/modules/home/seeAll";
import Container from "@/src/components/modules/UI/container";
import getCarService from "@/src/services/carServices";
import { TService } from "@/src/types/carServiceTypes";



export default async function Servicesss() {
    const {data:services}=await getCarService()

 

  return (
    <Container >
           <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recent Services</h2>
        <p className="text-center">
          A list of items that have been recently found and reported.
        </p>
      </div>
        <div className="grid grid-cols-3 gap-5 my-5">
        {services.slice(0,3).map((service:TService) => (
        <CarServiceCard key={service._id} service={service} />
    ))}
        </div>
        <SeeAll/>
      
    </Container>
  );
}