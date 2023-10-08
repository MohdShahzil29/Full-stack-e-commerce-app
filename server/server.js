const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/product", require("./routes/productRoutes"));
app.use("/api/v1/category", require("./routes/categoryController"));

const Port = process.env.PORT || 8000;

app.listen(Port, () => console.log(`Server running on ${Port}`));
