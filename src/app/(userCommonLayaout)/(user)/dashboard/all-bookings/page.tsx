"use client";

import { useGetAllBookings } from "@/src/hooks/user.hook";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";

const AllBookingsPage = () => {
  const { data: bookings, isLoading, isError } = useGetAllBookings();

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
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
        All Bookings
      </h1>

      <div className="overflow-x-auto">
        <Table
          aria-label="All Bookings Table"
          isStriped
          removeWrapper
          className="min-w-[800px]"
        >
          <TableHeader>
            <TableColumn>Email</TableColumn>
            <TableColumn>Phone</TableColumn>
            <TableColumn>Service</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Date</TableColumn>
            <TableColumn>Start Time</TableColumn>
            <TableColumn>Type</TableColumn>
            <TableColumn>R.Plate</TableColumn>
          </TableHeader>
          <TableBody>
            {bookings?.map((booking) => (
              <TableRow key={booking._id}>
                <TableCell>{booking?.customer?.email || "N/A"}</TableCell>
                <TableCell>{booking?.customer?.phone || "N/A"}</TableCell>
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
    </div>
  );
};

export default AllBookingsPage;
