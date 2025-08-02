import { Router } from "express";
const router = Router();
import { createBooking, getBookingsByDate, getAllBookings, updateBookingStatus } from "../controllers/bookingController.js";

router.post("/", createBooking);
router.get("/date/:date", getBookingsByDate);
router.get("/", getAllBookings);
router.put("/:id/status", updateBookingStatus);

export default router;
