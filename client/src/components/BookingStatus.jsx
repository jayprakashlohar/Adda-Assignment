import { useState, useEffect } from "react";

const BookingStatus = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/bookings")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);

  return (
    <>
      <div>
        <h2 className="statusHeading">Booking Status</h2>
        <table>
          <thead>
            <tr>
              <th>Facility Type</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>User</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.facilityType}</td>
                <td>{booking.date}</td>
                <td>{booking.startTime}</td>
                <td>{booking.endTime}</td>
                <td>{booking.user}</td>
                <td>{booking.status}</td>
                <td>{booking.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookingStatus;
