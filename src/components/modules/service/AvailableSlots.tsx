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
            <Select
         className="max-w-xs"
    
         
        //  label=""
         placeholder="available slots"

         value={selectedSlot || ""}
         onChange={(e) => setSelectedSlot(e.target.value)}
         
       >
         {slots.map((slot:SlotBooking) => (
           <SelectItem key={slot._id} value={slot.startTime}  > 
           {slot.startTime}
         </SelectItem>
        
         
         ))}
       </Select>
     </div>
    );
};

export default AvailableSlots;