const express = require("express");

const app = express();

const products = require("./data/products");

const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(productRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
    res.render("home", {
        products
    });
});


app.use((req, res) => {

    res.status(404).render("404", {
        message: "The page you are looking for does not exist."
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

