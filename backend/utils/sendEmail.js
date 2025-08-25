import { createTransport } from "nodemailer";
import { config } from "dotenv";
config();

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

async function sendConfirmationEmail({ name, phone, date, time, service }) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    
    subject: "New Car Service Booking",
    text: `New booking from ${name} (${phone}) on ${date} at ${time} for ${service}`
  };

  await transporter.sendMail(mailOptions);
}

export default sendConfirmationEmail;
