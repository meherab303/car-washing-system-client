"use client"
import React from "react";
import Countdown from "react-countdown";

import { useGetUserMyBookings } from "@/src/hooks/user.hook";
import { useUser } from "@/src/context/user.provider";
import { TBooking } from "@/src/types/getMyBookingsType";

const MyBookingsPage = () => {
  const { user } = useUser();
  const { data,isLoading,isError } = useGetUserMyBookings(user?.userEmail);
  console.log(data,"my page")

  if (isLoading) return <p>Loading...</p>;
 
  
  // Ensure data is an array
  if (!Array.isArray(data)) {
    return <p>No bookings data available.</p>;
  }
  
  const upcomingBookings = data.filter((booking: TBooking) => new Date(booking.slot.date) > new Date());
  const pastBookings = data.filter((booking: TBooking) => new Date(booking.slot.date) > new Date());
  
  return (
    <div>
      <h2>My Bookings</h2>

      {/* Upcoming Bookings */}
      <section>
        <h3>Upcoming Bookings</h3>
        <div className="upcoming-bookings">
           {upcomingBookings?.map((booking: TBooking) => (
            <div key={booking._id} className="booking-card">
              <h4>{booking?.service?.name}</h4>
              <p>{booking?.service?.description}</p>
              <div className="countdown-timer">
                <Countdown
                  date={new Date(`${booking.slot.date}T${booking.slot.startTime}`)}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <span>
                      {days}d {hours}h {minutes}m {seconds}s
                    </span>
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Bookings */}
      <section>
        <h3>Past Bookings</h3>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pastBookings?.map((booking: TBooking) => (
              <tr key={booking._id}>
                <td>{booking?.service?.name}</td>
                <td>{new Date(booking.slot.date).toLocaleString()}</td>
                <td>{booking.vehicleBrand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MyBookingsPage;
