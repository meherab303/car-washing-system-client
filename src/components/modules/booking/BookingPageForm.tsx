/* eslint-disable prettier/prettier */
import { BookingFormData, TBookingSlot } from "@/src/types/BookingTypes";

import { Input, Select, SelectItem, Button, Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Image } from "@heroui/image";
import {Controller } from "react-hook-form";

const BookingPageForm = ({formdetails}) => {
    
    const { searchParamsInfo,
        handleSubmit,register,control,  formState: { errors },
        handleBooking,
        slots}=formdetails

        const {serviceId,
            serviceName,
            duration,
            price,serviceImage,
            userData}=searchParamsInfo
    
    const onSubmit = async (data: BookingFormData) => {
      const bookingData = {
        service: serviceId,
        slot: data.slot,
        customer: userData?._id,
        vehicleType: data.vehicleType,
        vehicleBrand: data.vehicleBrand,
        vehicleModel: data.vehicleModel,
        manufacturingYear: Number(data.manufacturingYear),
        registrationPlate: data.registrationPlate,
      };
      
  
      handleBooking(bookingData as BookingFormData)
  
    };
  return (
     <div className="max-w-5xl mx-auto p-6">
      <Card className="p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Book Your Service</h2>

        {/* Service Details (Image + Form Side by Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-hidden rounded-xl"
          >
        
             <Image
          alt={serviceName || "Service"}
          className="object-cover w-full h-[445px] rounded-xl"
          src={serviceImage || "https://heroui.com/images/hero-card-complete.jpeg"}
              
        />
          </motion.div>

          {/* Booking Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Service Name (Read-only) */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
              <label htmlFor="serviceName" className="block font-medium text-black">Service Name</label>
              <Input id="serviceName" type="text" value={serviceName || ""} isReadOnly />
            </div>
            <div>
              <label htmlFor="duration" className="block font-medium text-black">Duration</label>
              <Input id="duration" type="text" value={duration || ""} isReadOnly />
            </div>
           </div>

            {/* Slot Selection (Dynamic) */}
            <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
            <div>
              <label htmlFor="slot" className="block font-medium text-black">Select Slot</label>
              <Controller
                name="slot"
                control={control}
                rules={{ required: "Slot selection is required" }}
                render={({ field }) => (
                  <Select {...field} className="w-full" isInvalid={!!errors.slot}>
                    {slots?.map((slot:TBookingSlot) => (
                      <SelectItem key={slot._id} value={slot._id}>
                        {slot.startTime}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              {errors.slot && <p className="text-red-500 text-sm mt-1">{errors.slot.message}</p>}
            </div>
            <div>
            <label htmlFor="price" className="block font-medium text-black">Price $</label>
            <Input id="price" type="text" value={price || ""} isReadOnly />
            </div>
            </div>

            {/* Vehicle Details (2-column layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="vehicleType" className="block font-medium text-black">Vehicle Type</label>
                <Input
                  id="vehicleType"
                  {...register("vehicleType", { required: "Vehicle Type is required" })}
                  isInvalid={!!errors.vehicleType}
                />
                {errors.vehicleType && <p className="text-red-500 text-sm mt-1">{errors.vehicleType.message}</p>}
              </div>
              <div>
                <label htmlFor="vehicleBrand" className="block font-medium text-black">Vehicle Brand</label>
                <Input
                  id="vehicleBrand"
                  {...register("vehicleBrand", { required: "Vehicle Brand is required" })}
                  isInvalid={!!errors.vehicleBrand}
                />
                {errors.vehicleBrand && <p className="text-red-500 text-sm mt-1">{errors.vehicleBrand.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="vehicleModel" className="block font-medium text-black">Vehicle Model</label>
                <Input
                  id="vehicleModel"
                  {...register("vehicleModel", { required: "Vehicle Model is required" })}
                  isInvalid={!!errors.vehicleModel}
                />
                {errors.vehicleModel && <p className="text-red-500 text-sm mt-1">{errors.vehicleModel.message}</p>}
              </div>
              <div>
                <label htmlFor="manufacturingYear" className="block font-medium text-black">Manufacturing Year</label>
                <Input
                  id="manufacturingYear"
                  type="number"
                  {...register("manufacturingYear", { required: "Manufacturing Year is required" })}
                  isInvalid={!!errors.manufacturingYear}
                />
                {errors.manufacturingYear && (
                  <p className="text-red-500 text-sm mt-1">{errors.manufacturingYear.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="registrationPlate" className="block font-medium text-black">Registration Plate</label>
              <Input
                id="registrationPlate"
                {...register("registrationPlate", { required: "Registration Plate is required" })}
                isInvalid={!!errors.registrationPlate}
              />
              {errors.registrationPlate && (
                <p className="text-red-500 text-sm mt-1">{errors.registrationPlate.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Confirm Booking
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </Card>
    </div>
  );
};

export default BookingPageForm;