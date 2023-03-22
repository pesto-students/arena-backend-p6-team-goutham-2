require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('DB CONNECTED');
  });

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Arena app listening on port ${process.env.PORT}`);
});

const authRoutes = require('./routes/auth-router');

app.use('/auth', authRoutes);
