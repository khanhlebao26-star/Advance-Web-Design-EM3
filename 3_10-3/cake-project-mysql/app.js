const express = require("express");
const dotenv = require("dotenv");
const cakeRoutes = require("./routes/cakeRoutes");

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", cakeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
