import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM'
];

const services = [
  "PPF - Paint Protection Film",
  "Ceramic Coating",
  "Wrap",
  "Interior Customization",
  "Accessories",
  "Foam Wash"
];

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [bookedSlots, setBookedSlots] = useState({});
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isBooked = (date, time) => {
    if (!date) return false;
    const dateStr = date.toISOString().split('T')[0];
    return bookedSlots[dateStr]?.includes(time);
  };

  const fetchBookedSlots = async () => {
    if (!selectedDate) return;
    const dateStr = selectedDate.toISOString().split('T')[0];
    try {
      const res = await fetch(`${API_URL}/api/bookings/date/${dateStr}`);
      const data = await res.json();
      setBookedSlots((prev) => ({
        ...prev,
        [dateStr]: data.map(booking => booking.time)
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
    if (!selectedDate || !selectedTime || !selectedService || !formData.name || !formData.phone) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);
    const dateStr = selectedDate.toISOString().split('T')[0];

    try {
      const res = await fetch(`${API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          date: dateStr,
          time: selectedTime,
          service: selectedService
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("✅ Booking successful!");
        setSubmitted(true);
        setSelectedTime('');
        setSelectedService('');
        setFormData({ name: '', phone: '' });
        fetchBookedSlots();
      } else {
        alert("❌ Booking failed: " + (result.error || result.message));
      }
    } catch (err) {
      console.error("Booking failed", err);
      alert("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-cyan-400 border-opacity-80"></div>
            <p className="text-cyan-300 font-semibold">Booking in progress...</p>
          </div>
        </div>
      )}
      <div className="relative flex flex-col items-center justify-start bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden animate-fade-in px-2 pt-10 pb-16">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 bg-opacity-20 rounded-full blur-3xl animate-pulse -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 bg-opacity-20 rounded-full blur-3xl animate-pulse -z-10" />

        <div className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-cyan-300 font-oswald drop-shadow-lg mb-2">Book Your Car Design Appointment</h1>
          <p className="text-lg text-blue-100 font-raleway">Reserve your slot for a personalized, premium car design experience!</p>
        </div>

        <div className="w-full max-w-xl bg-white/10 backdrop-blur-2xl border border-cyan-400/30 rounded-3xl shadow-2xl p-8 sm:p-12 space-y-8 mt-8">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-cyan-200 font-semibold font-raleway">Your Name:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 text-xl">👤</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full p-3 pl-10 rounded-lg bg-gray-900 bg-opacity-70 border border-cyan-700 text-white placeholder-gray-400 font-raleway"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-cyan-200 font-semibold font-raleway">Phone Number:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 text-xl">📱</span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className="w-full p-3 pl-10 rounded-lg bg-gray-900 bg-opacity-70 border border-cyan-700 text-white placeholder-gray-400 font-raleway"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block mb-2 text-cyan-200 font-semibold font-raleway">Select Service:</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-900 bg-opacity-70 border border-cyan-700 text-white placeholder-gray-400 font-raleway"
              >
                <option value="">-- Choose a Service --</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block mb-2 text-cyan-200 font-semibold font-raleway">Select Date:</label>
              <div className="relative">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    setSubmitted(false);
                    setSelectedTime('');
                  }}
                  placeholderText="Select a date"
                  dateFormat="dd-MM-yyyy"
                  className="w-full p-3 pl-10 rounded-lg bg-gray-900 bg-opacity-70 border border-cyan-700 text-white placeholder-gray-400 font-raleway"
                  calendarClassName="bg-gray-900 text-white border border-cyan-700 rounded-lg shadow-lg"
                  popperPlacement="bottom"
                  minDate={new Date()}
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Time */}
            <div>
              <label className="block mb-2 text-cyan-200 font-semibold font-raleway">Select Time:</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    disabled={isBooked(selectedDate, slot)}
                    className={`px-4 py-2 rounded-lg font-semibold transition text-sm sm:text-base shadow-md font-raleway ${
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

          {/* Submit */}
          <button
            onClick={handleBooking}
            className="w-full py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 hover:from-cyan-500 hover:to-teal-500 rounded-xl text-white font-bold text-lg shadow-xl transition duration-300 tracking-wide mt-2 font-oswald"
          >
            🚗 Confirm Booking
          </button>

          {submitted && (
            <div className="text-green-400 font-medium text-center mt-4">
              <span className="text-3xl">✅</span>
              <div className="mt-2 text-lg">Your slot has been booked successfully!</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
