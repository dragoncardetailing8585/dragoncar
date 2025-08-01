import express from 'express';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import Booking from './models/Booking.js'; // Adjust the path as needed
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

// Google OAuth2 setup
const oAuth2Client = new google.auth.OAuth2(
  process.env.GCAL_CLIENT_ID,
  process.env.GCAL_CLIENT_SECRET,
  process.env.GCAL_REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.GCAL_REFRESH_TOKEN });

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

// Helper function: Convert 12hr to 24hr time
function timeTo24Hr(time) {
  const [t, meridian] = time.split(' ');
  let [h, m] = t.split(':');
  h = parseInt(h);
  if (meridian === 'PM' && h !== 12) h += 12;
  if (meridian === 'AM' && h === 12) h = 0;
  return `${String(h).padStart(2, '0')}:${m}`;
}

// ✅ Get booked slots for a date
router.get('/slots', async (req, res) => {
  try {
    const bookings = await Booking.find({ date: req.query.date });
    res.json(bookings.map(b => b.time));
  } catch (err) {
    console.error("Error fetching slots:", err);
    res.status(500).json({ error: "Failed to fetch slots" });
  }
});

// ✅ Create a booking
router.post('/bookings', async (req, res) => {
  try {
    const { name, phone, date, time } = req.body;

    // 1. Save booking to DB
    const booking = await Booking.create({ name, phone, date, time });

    // 2. Add to Google Calendar
    const startTime = `${date}T${timeTo24Hr(time)}:00+05:30`;
    const endTime = `${date}T${timeTo24Hr(time)}:30+05:30`; // 30 min slot

    await calendar.events.insert({
      calendarId: 'primary',
      requestBody: {
        summary: `Car Renovation - ${name}`,
        description: `Phone: ${phone}`,
        start: { dateTime: startTime },
        end: { dateTime: endTime },
      },
    });

    // 3. Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'New Booking Received',
      text: `${name} booked a slot on ${date} at ${time}. Phone: ${phone}`,
    });

    res.json({ message: 'Booking successful!' });

  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ error: "Booking failed" });
  }
});

export default router;
