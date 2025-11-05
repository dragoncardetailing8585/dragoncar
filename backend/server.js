import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import { config } from "dotenv";
config();

const app = express();

// 🧩 Allow both local dev frontend & Render backend
const ALLOWED_ORIGINS = [
  "http://localhost:5173",             // your local frontend
  "http://127.0.0.1:5173",
  "https://dragon-car.onrender.com",   // your Render backend domain
  "https://dragoncardetailing.com",    // optional, in case your frontend goes live
];

// app.use(
//   cors({
//     origin(origin, cb) {
//       // allow curl/postman and whitelisted domains
//       if (!origin || ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
//       console.warn(`❌ Blocked CORS from origin: ${origin}`);
//       return cb(new Error(`Not allowed by CORS: ${origin}`));
//     },
//     methods: ["GET", "POST", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.use(cors()); // Enable CORS for all routes

app.use(json());

// ✅ Keep working endpoints
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);

// ✅ MongoDB connection + server start
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ MongoDB connected");
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  })
  .catch((err) => console.error("❌ DB connection error:", err));
