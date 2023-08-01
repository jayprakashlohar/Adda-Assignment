import { useState } from "react";

const BookingForm = () => {
  const initialFormData = {
    facilityType: "",
    date: "",
    startTime: "",
    endTime: "",
    user: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log("data", formData.date);
    e.preventDefault();
    fetch("http://localhost:8000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Booking successful:", data);
        alert(data.message);
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error("Booking failed:", error);
      });
  };

  return (
    <>
      <div className="formContainer">
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Facility Type *</label> <br />
            <select
              name="facilityType"
              value={formData.facilityType}
              onChange={handleChange}
              required
            >
              <option value="">Select Facility Type</option>
              <option value="Clubhouse">Clubhouse</option>
              <option value="Tennis Court">Tennis Court</option>
            </select>
          </div>
          <div>
            <label>Date *</label> <br />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Start Time *</label> <br />
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>End Time *</label> <br />
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>User *</label> <br />
            <input
              type="text"
              name="user"
              placeholder="Enter your name"
              value={formData.user}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
