import tenantService from "../services/tenant.service.js";

const createTenant = async (req, res) => {
  try {
    const tenant = await tenantService.createTenant(
      req.body,
      req.user?._id, // later from auth
    );

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
    const tenants = await tenantService.getAllTenants();

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
