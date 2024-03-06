const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();

require("dotenv").config();

app.use(express.json());

app.use("/auth", userRoutes);

mongoose
  .connect(process.env.mongo_url)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(process.env.PORT || 4000, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
