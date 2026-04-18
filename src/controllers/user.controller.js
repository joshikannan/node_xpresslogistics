// Controller Handles HTTP layer req → res Status codes, validation, routing
import { getNextUserId } from "../helperFunctions/getNextUserId.js";
import User from "../models/user.model.js";

const createUser = async (req, res) => {
  try {
    // check duplicate
    const existing = await User.findOne({ email: req.body.email });
    if (existing) {
      throw new Error("User already exists");
    }
    // 🔥 get next userId
    const userId = await getNextUserId();

    if (!userId) {
      throw new Error("userId generation failed");
    }

    // create user
    const user = await User.create({
      ...req.body,
      userId,
    });
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }); // latest first

    res.status(200).json({
      success: true,
      user_count: users?.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  createUser,
  getAllUsers,
};
