import express from "express";
import {
  DeleteUser,
  GetUser,
  GetUsers,
  UpdateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and you delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello admin, you are logged in and you delete all accounts");
// });

// UPDATE
router.put("/:id", verifyUser, UpdateUser);

// DELETE
router.delete("/:id", verifyUser, DeleteUser);

// GET
router.get("/:id", verifyUser, GetUser);

// GET ALL
router.get("/", verifyAdmin, GetUsers);
export default router;
