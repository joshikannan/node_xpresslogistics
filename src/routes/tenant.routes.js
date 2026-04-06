import express from "express";
import tenantController from "../controllers/tenant.controller.js";

const router = express.Router();

router.post("/create", tenantController.createTenant);
router.get("/", tenantController.getAllTenants);

export default router;
