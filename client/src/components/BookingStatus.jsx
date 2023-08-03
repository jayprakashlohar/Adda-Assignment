import { useState, useEffect } from "react";

const BookingStatus = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBookings = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://adda-server-2ql6.onrender.com/api/bookings"
      );
      const data = await response.json();
      setBookings(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
      <div>
        <h2 className="statusHeading">Booking Status</h2>
        <div className="loading">{isLoading ? <h2>Loading...</h2> : null}</div>

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
            {bookings
              ? bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.facilityType}</td>
                    <td>{new Date(booking.date).toLocaleDateString()}</td>
                    <td>{booking.startTime}</td>
                    <td>{booking.endTime}</td>
                    <td>{booking.user}</td>
                    <td>{booking.status}</td>
                    <td>Rs.{booking.amount}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookingStatus;
