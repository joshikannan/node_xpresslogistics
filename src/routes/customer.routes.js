import express from "express";
import customerController from "../controllers/customer.controller.js";

const router = express.Router();

router.post("/create", customerController.createCustomer);
router.get("/tenant/:tenantId", customerController.getCustomersByTenant);

export default router;
