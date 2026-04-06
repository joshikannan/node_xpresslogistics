import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/createuser", userController.createUser);
router.get("/getallusers", userController.getAllUsers);

export default router;
