const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const routes = require("./routes/index");

dotenv.config();

const app = express();

app.set("view engine", "ejs");

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "assets")));

app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);
