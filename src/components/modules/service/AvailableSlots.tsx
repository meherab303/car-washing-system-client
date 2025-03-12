/* eslint-disable prettier/prettier */

import {Select, SelectItem} from "@heroui/react"; 
import { useEffect, useState } from "react";

import envConfig from "@/src/config/envConfig";
import { SlotBooking } from "@/src/types/slotBookingTypes";





const AvailableSlots = (serviceId:{serviceId:string}) => {
    
    const [slots, setSlots] = useState<SlotBooking[]>([]);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    console.log(selectedSlot)

  
    useEffect(() => {
      const fetchSlots = async () => {
        try {
          const res = await fetch(`${envConfig.baseApi}/bookingSlot?serviceId=${serviceId.serviceId}`);
          const data = await res.json();
  
          if (data.success) {
            setSlots(data.data);
          } else {
            setSlots([]);
          }
        } catch (error) {
          setSlots([]);
        } 
      };
  
      fetchSlots();
    }, [serviceId]);



    return (
<div className="mt-2">
      <h3 className="text-lg font-semibold mb-2">Available Slots</h3>
      <div className="grid grid-cols-3 gap-3">
        {slots.length > 0 ? (
          slots.map((slot) => (
            <div
              key={slot._id}
              className="relative px-2 py-2 rounded-lg text-xs font-medium text-center shadow-sm 
overflow-hidden bg-default-200 transition-all duration-700 ease-in-out
before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-700 before:to-purple-700 
before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700 before:-z-10 
z-10"
            >
              {slot.startTime} to {slot.endTime}
            </div>
          ))
        ) : (
          <div className="text-gray-500 col-span-3 ">No slots available</div>
        )}
      </div>
    </div>
    );
};

export default AvailableSlots;