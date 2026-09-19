const products = require("../data/products");
const categories = require("../data/categories");

const getProducts = (req, res) => {
    let filteredProducts = [...products];

    const { search, category, sort } = req.query;

    // Search
    if (search) {
        filteredProducts = filteredProducts.filter(product =>
            product.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }

    // Filter category
    if (category) {
        filteredProducts = filteredProducts.filter(product =>
            product.category === category
        );
    }

    // Sort
    if (sort === "price_asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === "price_desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    res.render("products", {
        products: filteredProducts,
        categories,
        search,
        selectedCategory: category,
        selectedSort: sort
    });
};


const getProductDetail = (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(product =>
        product.id === id
    );

    if (!product) {
        return res.status(404).render("404", {
            message: "Product not found."
        });
    }

    res.render("product-detail", {
        product
    });
};


module.exports = {
    getProducts,
    getProductDetail
};