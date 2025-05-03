/* eslint-disable prettier/prettier */

import { SlotBooking } from "@/src/types/slotBookingTypes";

const AvailableSlots = (slots: { slots: SlotBooking[] }) => {
  return (
    <div className="mt-2">
      <h3 className="text-lg font-semibold mb-2">Available Slots</h3>
      <div className="grid grid-cols-3 gap-3">
        {slots.slots.length > 0 ? (
          slots.slots.map((slot) => (
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
