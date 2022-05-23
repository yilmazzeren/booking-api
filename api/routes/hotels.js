import express from "express";
import {
  CreateHotel,
  DeleteHotel,
  GetAllHotel,
  GetHotel,
  UpdateHotel,
} from "../controllers/hotels.js";

const router = express.Router();

// CREATE
router.post("/", CreateHotel);

// UPDATE
router.put("/:id", UpdateHotel);

// DELETE
router.delete("/:id", DeleteHotel);

// GET
router.get("/:id", GetHotel);

// GET ALL
router.get("/", GetAllHotel);

export default router;
