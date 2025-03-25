"use client";

import React from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { useGetUserMyBookings } from "@/src/hooks/user.hook";
import { useUser } from "@/src/context/user.provider";
import { TBooking } from "@/src/types/getMyBookingsType";
import { Calendar, Car, Clock } from "lucide-react";

const MyBookingsPage = () => {
  const { user } = useUser();
  const { data, isLoading } = useGetUserMyBookings(user?.userEmail);

  if (isLoading) return <p className="text-center text-xl font-semibold">Loading...</p>;

  if (!Array.isArray(data)) {
    return <p className="text-center text-xl text-red-500 font-semibold">No bookings data available.</p>;
  }

  const upcomingBookings = data.filter((booking: TBooking) => new Date(`${booking.slot.date}T${booking.slot.startTime}`) > new Date());
  const pastBookings = data.filter((booking: TBooking) => new Date(`${booking.slot.date}T${booking.slot.startTime}`) <= new Date());

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto p-6"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-6"
      >
        My Bookings
      </motion.h2>

      {/* Grid Layout for Upcoming and Past Bookings */}
      <motion.div className="grid md:grid-cols-2 gap-8">
        {/* Upcoming Bookings */}
        <motion.section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Upcoming Bookings</h3>
          {upcomingBookings.length > 0 ? (
            <motion.div className="space-y-4">
              {upcomingBookings.map((booking: TBooking, index) => (
                <motion.div
                  key={booking._id}
                  className="p-6 bg-white bg-opacity-70 backdrop-blur-md shadow-lg border border-gray-200 rounded-xl transition-transform transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    <Car size={20} className="text-gray-600" />
                   <p className="text-gray-600"> {booking?.service?.name}</p>
                  </h4>
                  <p className="text-default-400">{booking?.service?.description}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                    <Calendar size={16} />
                    {new Date(booking.slot.date).toLocaleDateString()} at {booking.slot.startTime}
                  </p>

                  {/* Animated Countdown Timer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mt-3 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md text-center shadow-md"
                  >
                    <Countdown
                      date={new Date(`${booking.slot.date}T${booking.slot.startTime}`)}
                      renderer={({ days, hours, minutes, seconds }) => (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="text-lg font-semibold"
                        >
                          <Clock size={18} className="inline-block mr-2" />
                          <span className="px-2">{days}d</span> : <span className="px-2">{hours}h</span> :{" "}
                          <span className="px-2">{minutes}m</span> : <span className="px-2">{seconds}s</span>
                        </motion.div>
                      )}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-gray-500">No upcoming bookings.</p>
          )}
        </motion.section>

        {/* Past Bookings */}
        <motion.section className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Past Bookings</h3>
          {pastBookings.length > 0 ? (
            <motion.div className="overflow-x-auto">
              <motion.table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="p-3">Service</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Vehicle</th>
                  </tr>
                </thead>
                <tbody>
                  {pastBookings.map((booking: TBooking, index) => (
                    <motion.tr
                      key={booking._id}
                      className="border-b"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="p-3 text-center">{booking?.service?.name}</td>
                      <td className="p-3 text-center">{new Date(booking.slot.date).toLocaleString()}</td>
                      <td className="p-3 text-center">{booking.vehicleBrand}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            </motion.div>
          ) : (
            <p className="text-gray-500">No past bookings.</p>
          )}
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default MyBookingsPage;
