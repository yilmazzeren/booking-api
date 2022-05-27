import express from "express";
import {
  CreateHotel,
  DeleteHotel,
  GetAllHotel,
  GetHotel,
  UpdateHotel,
} from "../controllers/hotels.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// CREATE
router.post("/", verifyAdmin, CreateHotel);

// UPDATE
router.put("/:id", verifyAdmin, UpdateHotel);

// DELETE
router.delete("/:id", verifyAdmin, DeleteHotel);

// GET
router.get("/:id", GetHotel);

// GET ALL
router.get("/", GetAllHotel);

export default router;
