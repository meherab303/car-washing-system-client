/* eslint-disable prettier/prettier */

import { notFound } from "next/navigation";


import getSingleCarService from "@/src/services/singleCarService";
import ServiceDetailsCard from "@/src/components/serviceDetailsCard";
import envConfig from "@/src/config/envConfig";





export default async function ServiceDetails({ params }: { params: { serviceDetails: string } }) {

    const {data:service}= await getSingleCarService( params.serviceDetails);
    // console.log(data)
    
    
  
    if (!service) return notFound(); // Show 404 if service not found
  
    return (
      <div className="max-w-2xl mx-auto p-6">
     <ServiceDetailsCard service={service}/>
    
      </div>
    );
  }

