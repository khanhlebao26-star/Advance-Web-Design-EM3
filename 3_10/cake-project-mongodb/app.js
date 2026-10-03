const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cakeRoutes = require("./routes/cakeRoutes");

dotenv.config();

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

app.use("/", cakeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);
