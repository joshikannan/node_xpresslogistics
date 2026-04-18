import Customer from "../models/customer.model.js";
import Tenant from "../models/tenant.model.js";
import { getNextSequence } from "../helperFunctions/getNextSequence.js";

const createCustomer = async (req, res) => {
  try {
    console.log("req.", req);
    console.log("req.body", req.body);

    // 🔥 generate sequence
    const seq = await getNextSequence("customerId");
    console.log("seq", seq);

    // 🔥 format ID
    const customerId = `CUST-${String(seq).padStart(3, "0")}`;
    console.log("create customer data", req.body);

    const customer = await Customer.create({
      ...req.body,
      customerId,
    });

    res.status(201).json({
      success: true,
      data: customer,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getCustomersByTenant = async (req, res) => {
  try {
    const { tenantId } = req.params;

    // 🔥 Step 1: Check tenant exists
    const tenant = await Tenant.findOne({ tenantId });

    if (!tenant) {
      throw new Error("Invalid tenantId or Tenant not found");
    }

    // 🔥 Step 2: Get customers
    const custlist = await Customer.find({ tenantId }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: custlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default {
  createCustomer,
  getCustomersByTenant,
};
