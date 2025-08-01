import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM'
];

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [bookedSlots, setBookedSlots] = useState({});
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const isBooked = (date, time) => {
    if (!date) return false;
    const dateStr = date.toISOString().split('T')[0];
    return bookedSlots[dateStr]?.includes(time);
  };

  const fetchBookedSlots = async () => {
    if (!selectedDate) return;
    const dateStr = selectedDate.toISOString().split('T')[0];
    try {
      const res = await fetch(`http://localhost:5000/api/slots?date=${dateStr}`);
      const data = await res.json();
      setBookedSlots((prev) => ({
        ...prev,
        [dateStr]: data
      }));
    } catch (err) {
      console.error("Error fetching booked slots", err);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      fetchBookedSlots();
    }
  }, [selectedDate]);

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !formData.name || !formData.phone) {
      alert("Please fill in all fields");
      return;
    }
    const dateStr = selectedDate.toISOString().split('T')[0];
    try {
      const res = await fetch("http://localhost:5000/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          date: dateStr,
          time: selectedTime
        }),
      });
      const result = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setSelectedTime('');
        setFormData({ name: '', phone: '' });
        fetchBookedSlots();
      } else {
        alert("Booking failed: " + result.error);
      }
    } catch (err) {
      console.error("Booking failed", err);
      alert("Server error");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-start bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden animate-fade-in px-2 pt-10 pb-16">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 bg-opacity-20 rounded-full blur-3xl animate-pulse -z-10" style={{ filter: 'blur(80px)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 bg-opacity-20 rounded-full blur-3xl animate-pulse -z-10" style={{ filter: 'blur(100px)' }} />

      <div className="mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-cyan-300 font-oswald drop-shadow-lg mb-2" data-aos="fade-down">Book Your Car Design Appointment</h1>
        <p className="text-lg text-blue-100 font-raleway" data-aos="fade-up" data-aos-delay="100">Reserve your slot for a personalized, premium car design experience!</p>
      </div>
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-2xl border border-cyan-400/30 rounded-3xl shadow-2xl p-8 sm:p-12 space-y-8 animate-fade-in mt-8" data-aos="zoom-in">
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-cyan-200 font-semibold font-raleway">Your Name:</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 text-xl">👤</span>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full p-3 pl-10 rounded-lg bg-gray-900 bg-opacity-70 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder-gray-400 font-raleway"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-cyan-200 font-semibold font-raleway">Phone Number:</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 text-xl">📱</span>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone number"
                className="w-full p-3 pl-10 rounded-lg bg-gray-900 bg-opacity-70 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder-gray-400 font-raleway"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-cyan-200 font-semibold font-raleway">Select Date:</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="7" width="18" height="14" rx="3" fill="currentColor" className="text-cyan-900/40" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4M3 11h18" />
                </svg>
              </span>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setSubmitted(false);
                  setSelectedTime('');
                }}
                placeholderText="Select a date"
                dateFormat="dd-MM-yyyy"
                className="w-full p-3 pl-10 rounded-lg bg-gray-900 bg-opacity-70 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition placeholder-gray-400 font-raleway appearance-none"
                calendarClassName="bg-gray-900 text-white border border-cyan-700 rounded-lg shadow-lg"
                popperPlacement="bottom"
                minDate={new Date()}
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-cyan-200 font-semibold font-raleway">Select Time:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  disabled={isBooked(selectedDate, slot)}
                  className={`px-4 py-2 rounded-lg font-semibold transition text-sm sm:text-base shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 font-raleway ${
                    selectedTime === slot ? 'bg-cyan-500 text-white scale-105' : 'bg-gray-800 text-cyan-200'
                  } ${
                    isBooked(selectedDate, slot) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-cyan-600 hover:text-white'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleBooking}
          className="w-full py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 hover:from-cyan-500 hover:to-teal-500 rounded-xl text-white font-bold text-lg shadow-xl transition duration-300 tracking-wide mt-2 animate-bounce font-oswald"
        >
          🚗 Confirm Booking
        </button>

        {submitted && (
          <div className="text-green-400 font-medium text-center animate-fade-in mt-4" data-aos="fade-up" data-aos-delay="200">
            <span className="text-3xl">✅</span>
            <div className="mt-2 text-lg">Your slot has been booked successfully!</div>
          </div>
        )}
      </div>
    </div>
  );
}
