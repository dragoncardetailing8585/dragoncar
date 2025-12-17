import { google } from "googleapis";
import { config } from "dotenv";
config();

const oauth2Client = new google.auth.OAuth2(
  process.env.GCAL_CLIENT_ID,
  process.env.GCAL_CLIENT_SECRET,
  process.env.GCAL_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.GCAL_REFRESH_TOKEN,
});

const calendar = google.calendar({
  version: "v3",
  auth: oauth2Client,
});

// 🔥 FIXED FUNCTION
async function createCalendarEvent({ name, phone, date, time, service }) {

  // Convert "2:00 PM" → "14:00"
  const [t, meridiem] = time.split(" ");
  let [hours, minutes] = t.split(":");

  hours = Number(hours);
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;

  const startDateTime = `${date}T${String(hours).padStart(2, "0")}:${minutes}:00`;
  const endDateTime = addOneHour(startDateTime);

  await calendar.events.insert({
    calendarId: "primary",
    requestBody: {
      summary: `Car Service: ${service}`,
      description: `Booking for ${name}, Phone: ${phone}`,
      start: {
        dateTime: startDateTime,
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: endDateTime,
        timeZone: "Asia/Kolkata",
      },
    },
  });
}

// ✅ Helper: add 1 hour safely (no Date object)
function addOneHour(dateTime) {
  const [date, time] = dateTime.split("T");
  let [h, m] = time.split(":");

  h = String((Number(h) + 1) % 24).padStart(2, "0");
  return `${date}T${h}:${m}:00`;
}

export default createCalendarEvent;
