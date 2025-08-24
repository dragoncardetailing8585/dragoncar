import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// EMAIL_PASS=jfqo ebwd cnhs xgt

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to Admin (you)
    const adminMailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: '🚗 New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Email to Customer (confirmation)
    const customerMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting us!',
      text: `
Hi ${name},

Thank you for reaching out to us! We have received your message and will get back to you shortly.

Here’s a copy of your message:
"${message}"

Best regards,  
Team Dragon Car Detailing
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.status(200).json({ message: "Emails sent successfully" });

  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
