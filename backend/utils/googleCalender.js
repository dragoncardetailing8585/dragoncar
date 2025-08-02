import { google } from "googleapis";
import { config } from "dotenv";
config();

const oauth2Client = new google.auth.OAuth2(
  process.env.GCAL_CLIENT_ID,
  process.env.GCAL_CLIENT_SECRET,
  process.env.GCAL_REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: process.env.GCAL_REFRESH_TOKEN });

const calendar = google.calendar({ version: "v3", auth: oauth2Client });

async function createCalendarEvent({ name, phone, date, time, service }) {
  const [hour, minute, meridiem] = time.split(/:| /);
  let startHour = parseInt(hour);
  if (meridiem === "PM" && startHour !== 12) startHour += 12;
  if (meridiem === "AM" && startHour === 12) startHour = 0;

  const startDateTime = new Date(`${date}T${String(startHour).padStart(2, '0')}:${minute}:00`);
  const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // 1 hour

  await calendar.events.insert({
    calendarId: "primary",
    requestBody: {
      summary: `Car Service: ${service}`,
      description: `Booking for ${name}, Phone: ${phone}`,
      start: { dateTime: startDateTime.toISOString(), timeZone: "Asia/Kolkata" },
      end: { dateTime: endDateTime.toISOString(), timeZone: "Asia/Kolkata" }
    }
  });
}

export default createCalendarEvent;
