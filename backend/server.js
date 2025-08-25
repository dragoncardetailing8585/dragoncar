import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import contactRoutes from './routes/contact.js';
import { config } from "dotenv";
config();

import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();
app.use(cors({  
  origin: ["https://dragoncardetailing.com"],
  methods: ["GET", "POST"],
}));
app.use(json());

app.use("/api/bookings", bookingRoutes);
app.use('/api/contact', contactRoutes);

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch((err) => console.error("DB connection error:", err));
