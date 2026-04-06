// Service Handles business logic DB operations, rules, validations

import { getNextUserId } from "../helperFunctions/getNextUserId.js";
import User from "../models/user.model.js";

const createUser = async (data) => {
  // check duplicate
  const existing = await User.findOne({ email: data.email });
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
    ...data,
    userId,
  });
  return user;
};
const getAllUsers = async () => {
  const users = await User.find().sort({ createdAt: -1 }); // latest first
  return users;
};

export default {
  createUser,
  getAllUsers,
};
