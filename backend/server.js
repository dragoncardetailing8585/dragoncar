import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import { config } from "dotenv";
config();

import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();
app.use(cors());
app.use(json());

app.use("/api/bookings", bookingRoutes);

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch((err) => console.error("DB connection error:", err));
