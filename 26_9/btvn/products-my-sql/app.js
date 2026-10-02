const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `Server is running on port http://localhost:${PORT}/api/products`,
  );
});
