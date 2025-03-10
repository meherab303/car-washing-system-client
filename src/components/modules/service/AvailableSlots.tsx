/* eslint-disable prettier/prettier */

import {Select, SelectItem} from "@heroui/react";

import envConfig from "@/src/config/envConfig";



const AvailableSlots = async(serviceId:{serviceId:string}) => {
    
    const res=await fetch(`${envConfig.baseApi}/bookingSlot?serviceId=${serviceId.serviceId}`)
    const data=await res.json()

   console.log(data)

    return (
//         <div>
              
// {data.data.map((slot)=><p key={slot._id}>{slot?.startTime} to {slot.endTime}</p>)}
//         </div>
     <div className="mt-2">
            <Select
         className="max-w-xs"
        //  disabledKeys={[data.data.startTime]}
        //  label="Favorite Animal"
         placeholder="available slots"
       >
         {data.data.map((slot) => (
           <SelectItem key={slot._id}>{slot.startTime} </SelectItem>
         ))}
       </Select>
     </div>
    );
};

export default AvailableSlots;