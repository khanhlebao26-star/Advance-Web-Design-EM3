const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 3001;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection errror:", error);
  });

app.use("/", require("./routes/squareRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
