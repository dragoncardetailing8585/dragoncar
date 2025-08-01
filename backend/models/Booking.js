import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String, // Format: YYYY-MM-DD
  time: String, // Format: 10:00 AM
});

export default mongoose.model('Booking', bookingSchema);
