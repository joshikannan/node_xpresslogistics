// Application setup, only defines my app, server not starts here

import express from "express";
import userRoutes from "./routes/user.routes.js";
import tenantRoutes from "./routes/tenant.routes.js";
import customerRoutes from "./routes/customer.routes.js";

const app = express();

app.use(express.json());

// register route

app.use("/api/users", userRoutes);
app.use("/api/tenants", tenantRoutes);
app.use("/api/customers", customerRoutes);

app.get("/", (req, res) => {
  res.send("Testing auto deploy CI / CD ");
});

export default app;

// flow

// POST /api/users (app.js)
//    ↓
// Route
//    ↓
// Controller
//    ↓
// Service
//    ↓
// Model (MongoDB)
