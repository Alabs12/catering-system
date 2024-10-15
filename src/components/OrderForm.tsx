import React, { useState } from 'react';

const OrderForm: React.FC = () => {
  const [department, setDepartment] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [room, setRoom] = useState('');
  const [menu, setMenu] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    console.log('Order submitted:', { department, meetingDate, meetingTime, room, menu });
    // Reset form or show confirmation
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Place Catering Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="department" className="block mb-2">Department</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="meetingDate" className="block mb-2">Meeting Date</label>
          <input
            type="date"
            id="meetingDate"
            value={meetingDate}
            onChange={(e) => setMeetingDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="meetingTime" className="block mb-2">Meeting Time</label>
          <input
            type="time"
            id="meetingTime"
            value={meetingTime}
            onChange={(e) => setMeetingTime(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="room" className="block mb-2">Room</label>
          <input
            type="text"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="menu" className="block mb-2">Menu</label>
          <select
            id="menu"
            value={menu}
            onChange={(e) => setMenu(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select a menu</option>
            <option value="menu1">Menu 1</option>
            <option value="menu2">Menu 2</option>
            <option value="menu3">Menu 3</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;