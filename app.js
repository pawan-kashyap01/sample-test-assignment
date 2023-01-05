const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const roleRoute = require("./routes/role");
const visitorRoute = require("./routes/visitor");
const employeeRoute = require("./routes/employee");
const managerRoute = require("./routes/manager");
const adminRoute = require("./routes/admin");
const cors = require("cors");
const errorMiddleware = require('./middleware/error');

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", authRoute); // for register and login
app.use("/api/role", roleRoute); // for giving employees access to manage users. (admin only).
app.use("/api/users", userRoute); //for managing user -> admin + manager + user(its own resource) + employee if admin has given employee access
app.use("/api/visitors", visitorRoute); // Public endpoint anyone can access
app.use("/api/employee", employeeRoute); // Employee or above(manager & admin also)
app.use("/api/manager", managerRoute); // (manager + admin)
app.use("/api/admin", adminRoute); // admin only

//Error Middleware
app.use(errorMiddleware);
module.exports = app;