# 🚗 Dragon Car – Car Design Appointment Booking System

## 1. Overview
Dragon Car is a **full-stack appointment booking system** designed for a car design/renovation service.  
The platform allows customers to seamlessly **book slots, receive confirmation via email, and automatically sync appointments with Google Calendar**.  

The project demonstrates expertise in:  
- **Frontend:** Responsive React UI with modern styling  
- **Backend:** Node.js, Express.js, MongoDB  
- **Integrations:** Google Calendar API, Nodemailer (email notifications)  
- **Features:** Real-time slot booking, appointment management, admin dashboard  

---

## 2. Features  

✅ **User Features**  
- Browse available slots in a calendar view  
- Book car design/renovation appointments with contact details  
- Receive confirmation via **email notification**  
- Appointment automatically synced with **Google Calendar**  

✅ **Admin Features**  
- View all bookings in a **dashboard**  
- Approve/reject/update bookings  
- Manage availability (time slots)  
- Monitor booking statistics  

✅ **System Features**  
- **Google Calendar API integration** – auto-creates events for every booking  
- **Nodemailer integration** – sends confirmation & reminder emails  
- **MongoDB Database** – stores appointments, users, and availability  
- **Error handling & validation** – prevents double-booking of slots  
- **Secure & Scalable** – designed for real-world use  

---

## 3. Tech Stack  

**Frontend**  
- React.js  
- Tailwind CSS  
- Axios (API calls)  

**Backend**  
- Node.js, Express.js  
- MongoDB (Mongoose ORM)  

**Integrations**  
- Google Calendar API (OAuth2, Refresh Tokens)  
- Nodemailer (Email Notifications)  

**Other Tools**  
- Git & GitHub (Version Control)  
- Postman (API Testing)  
- VS Code (Development)  

---

## 4. Architecture  

[React Frontend]  <----->  [Node.js + Express Backend]  <----->  [MongoDB Database]
        |                               |                                |
   Booking Form UI                Booking API                     Stores Appointments
        |                               |                                |
        |--------> Google Calendar API (Event Sync) <--------------------|
        |--------> Nodemailer (Email Confirmation) ----------------------|


---

## 5. Workflow  

1. **User selects slot** from the frontend calendar  
2. **Frontend (React)** sends booking request to **Backend API (Express)**  
3. **Backend checks availability** in MongoDB  
4. If available:  
   - Stores booking in database  
   - Creates event in **Google Calendar**  
   - Sends confirmation via **Nodemailer**  
5. **Admin Portal** allows staff to view/manage bookings  

---

## 6. Sample Booking Flow  

- User fills **Booking Form** → Name, Contact, Date & Time  
- System checks slot availability  
- Booking saved in MongoDB  
- Event created in **Google Calendar** with client details  
- Confirmation email sent to user & admin  

---

## 7. Future Enhancements  

🔹 Payment Gateway integration (Stripe/PayPal)  
🔹 SMS notifications (Twilio API)  
🔹 Multi-branch scheduling (for multiple workshops)  
🔹 Analytics Dashboard (customer insights, peak hours)  

---

## 8. Project Links  

- **GitHub Repository:**  
- **Live Demo:** 
