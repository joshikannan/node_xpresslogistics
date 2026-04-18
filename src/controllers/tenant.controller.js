import { getNextSequence } from "../helperFunctions/getNextSequence.js";
import Tenant from "../models/tenant.model.js";

const createTenant = async (req, res) => {
  try {
    const data = req.body;
    // 🔍 check duplicate email
    const existing = await Tenant.findOne({ email: data.email });
    if (existing) {
      throw new Error("Tenant already exists");
    }
    // 🔥 generate sequence number
    const seq = await getNextSequence("tenantId");

    // 🔥 format TEN-001
    const tenantId = `TEN-${String(seq).padStart(3, "0")}`;

    const tenant = await Tenant.create({
      ...data,
      tenantId,
    });

    res.status(201).json({
      success: true,
      data: tenant,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllTenants = async (req, res) => {
  try {
    const tenants = await Tenant.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      tenant_count: tenants.length,
      data: tenants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  createTenant,
  getAllTenants,
};
