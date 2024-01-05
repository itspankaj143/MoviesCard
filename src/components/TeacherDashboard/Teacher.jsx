import React, { useState, useEffect } from 'react';

const TeacherDashboard = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [newSlot, setNewSlot] = useState({
    date: '',
    time: '',
    duration: '',
    subject: '',
  });

  useEffect(() => {
    const storedSlots = JSON.parse(localStorage.getItem('teacherTimeSlots'));
    if (storedSlots) {
      setTimeSlots(storedSlots);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSlot({ ...newSlot, [name]: value });
  };

  const addTimeSlot = (e) => {
    e.preventDefault()
    const updatedSlots = [...timeSlots, newSlot];
    console.log(updatedSlots)
    setTimeSlots(updatedSlots);
    localStorage.setItem('teacherTimeSlots', JSON.stringify(updatedSlots));
    setNewSlot({
      date: '',
      time: '',
      duration: '',
      subject: '',
    });
  };

  return (
    <div className='teahcer'>
      <h2>Teacher Dashboard</h2>

      {/* Display existing time slots */}
      <div>
        <h3>New Time Slots</h3>
        {timeSlots.map((slot, index) => (
          <div key={index}>
            <p>Date: {slot.date}</p>
            <p>Time: {slot.time}</p>
            <p>Duration: {slot.duration}</p>
            <p>Subject: {slot.subject}</p>
          </div>
        ))}
      </div>

      {/* Form to add new time slot */}
      <div>
        <h3>Add New Time Slot</h3>
        <form onSubmit={addTimeSlot}>
          <input
            type="date"
            name="date"
            value={newSlot.date}
            onChange={handleInputChange}
          />
          <br /><br />
          <input
            type="time"
            name="time"
            value={newSlot.time}
            onChange={handleInputChange}
          />
           <br /><br />
          <input
            type="number"
            name="duration"
            placeholder="Duration (in minutes)"
            value={newSlot.duration}
            onChange={handleInputChange}
          />
           <br /><br />
          <input
            type="text"
            name="subject"
            placeholder="Subject/Class"
            value={newSlot.subject}
            onChange={handleInputChange}
          />
           <br /><br />
          <button type="submit">Add Time Slot</button>
        </form>
      </div>
    </div>
  );
};

export default TeacherDashboard;
