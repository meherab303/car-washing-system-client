"use client";

import React from "react";
import Countdown from "react-countdown";
import { useGetUserMyBookings } from "@/src/hooks/user.hook";
import { useUser } from "@/src/context/user.provider";
import { TBooking } from "@/src/types/getMyBookingsType";
import { Calendar, Car, Clock } from "lucide-react";
import { Spinner } from "@heroui/react";

const MyBookingsPage = () => {
  const { user } = useUser();
  const { data, isLoading } = useGetUserMyBookings(user?.userEmail);

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-xl font-semibold">
        <Spinner
          classNames={{ label: "text-foreground mt-4" }}
          variant="spinner"
          size="lg"
        />
      </div>
    );

  if (!Array.isArray(data)) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-xl font-semibold">
        <Spinner
          classNames={{ label: "text-foreground mt-4" }}
          variant="spinner"
          size="lg"
        />
      </div>
    );
  }

  const upcomingBookings = data
    .filter(
      (booking: TBooking) =>
        new Date(`${booking.slot.date}T${booking.slot.startTime}`) > new Date(),
    )
    .sort(
      (a, b) =>
        new Date(`${a.slot.date}T${a.slot.startTime}`).getTime() -
        new Date(`${b.slot.date}T${b.slot.startTime}`).getTime(),
    );

  const pastBookings = data
    .filter(
      (booking: TBooking) =>
        new Date(`${booking.slot.date}T${booking.slot.startTime}`) <=
        new Date(),
    )
    .sort(
      (a, b) =>
        new Date(`${b.slot.date}T${b.slot.startTime}`).getTime() -
        new Date(`${a.slot.date}T${a.slot.startTime}`).getTime(),
    );

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Bookings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            Upcoming Bookings
          </h3>
          {upcomingBookings.length > 0 ? (
            <div className="space-y-4">
              {upcomingBookings.map((booking: TBooking) => (
                <div key={booking._id} className="p-4 bg-white shadow-md rounded-lg">
                  <h4 className="text-xl font-semibold flex items-center gap-2 text-gray-600">
                    <Car size={20} className="text-gray-600" />
                    {booking?.service?.name}
                  </h4>
                  <p className="text-default-400">{booking?.service?.description}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                    <Calendar size={16} />
                    {new Date(booking.slot.date).toLocaleDateString()} at{" "}
                    {booking.slot.startTime}
                  </p>
                  <div className="mt-3 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow-md flex items-center justify-center text-sm sm:text-base flex-wrap sm:flex-nowrap">
                    <Clock size={16} className="mr-2 hidden sm:inline-block" />
                    <Countdown
                      date={
                        new Date(`${booking.slot.date}T${booking.slot.startTime}`)
                      }
                      renderer={({ days, hours, minutes, seconds }) => (
                        <div className="flex gap-1 sm:gap-2">
                          <span className="px-1 sm:px-2">{days}d</span>:
                          <span className="px-1 sm:px-2">{hours}h</span>:
                          <span className="px-1 sm:px-2">{minutes}m</span>:
                          <span className="px-1 sm:px-2">{seconds}s</span>
                        </div>
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No upcoming bookings.</p>
          )}
        </section>

        <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">
            Past Bookings
          </h3>
          {pastBookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-lg text-sm">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="p-3">Service</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Vehicle</th>
                  </tr>
                </thead>
                <tbody>
                  {pastBookings.map((booking: TBooking) => (
                    <tr key={booking._id} className="border-b text-center">
                      <td className="p-3 text-black">{booking?.service?.name}</td>
                      <td className="p-3 text-black">
                        {new Date(booking.slot.date).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" },
                        )}
                      </td>
                      <td className="p-3 text-black">{booking.vehicleBrand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No past bookings.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default MyBookingsPage;
