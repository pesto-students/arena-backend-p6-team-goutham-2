require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  // origin: "http://localhost:3000",

  origin: "https://frontend-or31.onrender.com",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(process.env.PORT, () => {
  console.log(`Arena app listening on port ${process.env.PORT}`);
});

const authRoutes = require("./routes/auth-router");
const adminRoutes = require("./routes/admin-router");
const ownerRoutes = require("./routes/owner-router");
const courtRoutes = require("./routes/court-router");
const paymentRoutes = require("./routes/payment-router");

app.use("/auth", authRoutes);
app.use("/auth/admin", adminRoutes);
app.use("/auth/owner", ownerRoutes);
app.use("/auth/court", courtRoutes);
app.use("/auth/payment", paymentRoutes);
