// controllers/bookings.js
import Booking from "../models/Booking.js";
import createCalendarEvent from "../utils/googleCalender.js"; // keep only calendar

export async function createBooking(req, res) {
  try {
    const { name, phone, date, time, service } = req.body;

    // Save booking
    const newBooking = await Booking.create({ name, phone, date, time, service });

    // ✅ respond immediately (frontend stops loading right away)
    res.status(201).json(newBooking);

    // 🧰 do Calendar in the background (non-blocking)
    setImmediate(async () => {
      try {
        await createCalendarEvent({ name, phone, date, time, service, _id: newBooking._id });
        console.log("✅ Calendar event created");
      } catch (err) {
        console.error("❌ Calendar error:", err?.response?.data || err);
      }
    });

  } catch (error) {
    console.error("❌ createBooking failed:", error);
    res.status(500).json({ error: error.message });
  }
}

export async function getBookingsByDate(req, res) {
  try {
    const bookings = await Booking.find({ date: req.params.date });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllBookings(req, res) {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateBookingStatus(req, res) {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
