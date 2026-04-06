import Customer from "../models/customer.model.js";
import Tenant from "../models/tenant.model.js";

import { getNextSequence } from "../helperFunctions/getNextSequence.js";

const createCustomer = async (data) => {
  // 🔥 generate sequence
  const seq = await getNextSequence("customerId");
  console.log("seq", seq);

  // 🔥 format ID
  const customerId = `CUST-${String(seq).padStart(3, "0")}`;
  console.log("create customer data", data);

  const customer = await Customer.create({
    ...data,
    customerId,
  });

  return customer;
};

const getCustomersByTenant = async (tenantId) => {
  // 🔥 Step 1: Check tenant exists
  const tenant = await Tenant.findOne({ tenantId });

  if (!tenant) {
    throw new Error("Invalid tenantId or Tenant not found");
  }

  // 🔥 Step 2: Get customers
  const custlist = await Customer.find({ tenantId }).sort({ createdAt: -1 });

  return custlist;
};

export default {
  createCustomer,
  getCustomersByTenant,
};
