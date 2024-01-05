import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookedSlot, setBookedSlot] = useState(null);

  useEffect(() => {
    const teacherTimeSlots = JSON.parse(localStorage.getItem('teacherTimeSlots'));
    if (teacherTimeSlots) {
      setAvailableSlots(teacherTimeSlots);
    }
  }, []);

  const handleSlotBooking = (slotId) => {
    const updatedSlots = availableSlots.map((slot) =>
      slot.id === slotId ? { ...slot, isBooked: true } : slot
    );
  console.log(updatedSlots)
    const selectedSlot = updatedSlots.find((slot) => slot.id === slotId && slot.isBooked);
  
    if (selectedSlot) {
      setBookedSlot(selectedSlot);
  
      const updatedAvailableSlots = updatedSlots.map((slot) =>
        slot.id === slotId ? { ...slot, isBooked: false } : slot
      );
  
      setAvailableSlots(updatedAvailableSlots);
      localStorage.setItem('teacherTimeSlots', JSON.stringify(updatedAvailableSlots));
      // Additional logic can be added here to update the teacher's data in localStorage
    }
  };

  return (
    <div>
      <h2>Student Dashboard</h2>

      {/* Display booked slot */}
      {bookedSlot && (
        <div>
          <h3>Booking Confirmation</h3>
          <p>You have successfully booked the slot:</p>
          <p>Date: {bookedSlot.date}</p>
          <p>Time: {bookedSlot.time}</p>
          <p>Duration: {bookedSlot.duration} minutes</p>
          <p>Subject: {bookedSlot.subject}</p>
        </div>
      )}

      {/* Display available time slots */}
      <div>
        <h3>Available Time Slots</h3>
        {availableSlots.map((slot) => (
          <div key={slot.id}>
            <p>Date: {slot.date}</p>
            <p>Time: {slot.time}</p>
            <p>Duration: {slot.duration} minutes</p>
            <p>Subject: {slot.subject}</p>
            <button onClick={() => handleSlotBooking(slot.id)}>Book Slot</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
