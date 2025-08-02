import Booking from "../models/Booking.js";
import sendConfirmationEmail from "../utils/sendEmail.js";
import createCalendarEvent from "../utils/googleCalender.js";

export async function createBooking(req, res) {
  try {
    const { name, phone, date, time, service } = req.body;
    const newBooking = new Booking({ name, phone, date, time, service });
    await newBooking.save();

    await createCalendarEvent({ name, phone, date, time, service });
    await sendConfirmationEmail({ name, phone, date, time, service });

    res.status(201).json(newBooking);
  } catch (error) {
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
