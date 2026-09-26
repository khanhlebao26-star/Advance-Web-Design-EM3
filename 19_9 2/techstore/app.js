const express = require("express");
const path = require("path");

const app = express();

const products = require("./data/products");

const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");

const port = 3000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Static files
app.use(express.static(path.join(__dirname, "public")));


// Routes
app.use(productRoutes);
app.use(userRoutes);


// Home
app.get("/", (req, res) => {
    res.render("home", {
        products
    });
});


// 404
app.use((req, res) => {
    res.status(404).render("404", {
        message: "The page you are looking for does not exist."
    });
});


// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});