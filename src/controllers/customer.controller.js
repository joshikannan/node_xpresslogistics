import customerService from "../services/customer.service.js";

const createCustomer = async (req, res) => {
  try {
    console.log("req.", req);
    console.log("req.body", req.body);

    const customer = await customerService.createCustomer(req.body);

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
    const customers = await customerService.getCustomersByTenant(tenantId);
    res.json({
      success: true,
      data: customers,
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
