import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    // 🔥 Custom ID
    customerId: {
      type: String, // CUST-001
      unique: true,
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },

    phone: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, "Phone must be 10 digits"],
    },

    address: {
      type: String,
      trim: true,
    },

    // 🔥 Link to tenant
    tenantId: {
      type: String, // TEN-001
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Customer", customerSchema);
