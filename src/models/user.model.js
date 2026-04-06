import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      unique: true,
      // required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "staff"], // This field can only have these specific values
      default: "staff",
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
