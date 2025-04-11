"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "@/src/services/getAllBookings";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import { useGetAllBookings } from "@/src/hooks/user.hook";

const AllBookingsPage = () => {
  const{data:bookings,isLoading,isError}=useGetAllBookings()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Spinner label="Loading bookings..." color="primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center mt-4">
        Failed to load bookings. Please try again later.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>

      <Table aria-label="All Bookings Table">
        <TableHeader>
          <TableColumn>Email</TableColumn>
          <TableColumn>Phone</TableColumn>
          <TableColumn>Service</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Date</TableColumn>
          <TableColumn>startTime</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>R.Plate</TableColumn>
        </TableHeader>
        <TableBody>
          {bookings?.map((booking) => (
            <TableRow key={booking._id}>
              
              <TableCell>{booking?.customer?.email|| "N/A"}</TableCell>
              <TableCell>{booking?.customer?.phone|| "N/A"}</TableCell>
              <TableCell>{booking.service.name}</TableCell>
              <TableCell>{booking.service.price}$</TableCell>
              <TableCell>{booking.slot.date}</TableCell>
              <TableCell>{booking.slot.startTime}</TableCell>
              <TableCell>{booking.vehicleType}</TableCell>
              <TableCell>{booking.registrationPlate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllBookingsPage;
