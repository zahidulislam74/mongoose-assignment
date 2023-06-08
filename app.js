const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config;
const PORT = 4000;
const productRoutes = require("./routes/productRoutes");
const authenticate = require("./controllers/auth");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

//route middleware
app.use("/api", authenticate);
app.use("/api", productRoutes);

module.exports = { PORT, mongoose, app };
