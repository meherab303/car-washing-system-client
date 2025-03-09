/* eslint-disable prettier/prettier */

import { notFound } from "next/navigation";


import getSingleCarService from "@/src/services/singleCarService";
import ServiceDetailsCard from "@/src/components/serviceDetailsCard";




export default async function ServiceDetails({ params }: { params: { serviceDetails: string } }) {
    const {data}= await getSingleCarService(params.serviceDetails);
    
  
    if (!data) return notFound(); // Show 404 if service not found
  
    return (
      <div className="max-w-2xl mx-auto p-6">
     <ServiceDetailsCard service={data}/>
      </div>
    );
  }

