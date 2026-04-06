import mongoose from "mongoose";

const tenantSchema = new mongoose.Schema(
  {
    // 🔥 Custom formatted ID
    tenantId: {
      type: String, // e.g. TEN-001
      unique: true,
      required: true,
    },

    tenantName: {
      type: String,
      required: true,
      trim: true,
    },

    tenantCompany: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },

    address: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    userId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Tenant", tenantSchema);
