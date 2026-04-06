import { getNextSequence } from "../helperFunctions/getNextSequence.js";
import Tenant from "../models/tenant.model.js";

const createTenant = async (data) => {
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

  return tenant;
};

const getAllTenants = async () => {
  return await Tenant.find().sort({ createdAt: -1 });
};

export default {
  createTenant,
  getAllTenants,
};
