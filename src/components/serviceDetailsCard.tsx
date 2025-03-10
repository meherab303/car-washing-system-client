/* eslint-disable prettier/prettier */
"use client"
import { Button, Card, CardBody, Image } from '@heroui/react';

import { TService } from '../types/carServiceTypes'; 

import AvailableSlots from './modules/service/AvailableSlots';

const ServiceDetailsCard = (service:{service:TService}) => {
    
    const {name,description,duration,price,_id=''}=service?.service 


    return (
        <div className='flex gap-5 mt-10 '>
               <div className="w-full md:w-1/2 ">
          <Image
            alt={name}
            className="w-full h-96 object-cover "
            src={ "https://heroui.com/images/hero-card-complete.jpeg"}
            
            
          />
          
        </div>
        <div>
          <Card className="w-full h-96 max-w-4xl mx-auto flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
        {/* Left: Service Image */}
     
      
        {/* Right: Service Details */}
        <CardBody className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-default-800">{name}</h2>
          <p className="text-default-600 mt-2">{description}</p>
          <p className="text-lg font-semibold text-blue-500 mt-2">Price: ${price}</p>
          <p className="text-sm text-default-600">Duration: {duration} mins</p>
              {/* Time Slot Selection */}
           <div >
           <AvailableSlots serviceId={_id} />
           </div>
         
          <Button className="mt-4 w-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Book This Service
          </Button>
        </CardBody>
      </Card>
          </div>
        </div>
        
    );
};

export default ServiceDetailsCard;