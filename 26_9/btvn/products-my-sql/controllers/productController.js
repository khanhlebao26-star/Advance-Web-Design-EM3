const Product = require("../models/productModel");

const productController = {
  getProducts: (req, res) => {
    Product.getAllProducts((err, products) => {
      if (err) {
        return res.status(500).json({ error: "Database query error" });
      }
      return res.render("products", { products });
    });
  },

  showAddProductForm: (req, res) => {
    return res.render("addProduct");
  },

  addProduct: (req, res) => {
    const productData = req.body;

    Product.createProduct(productData, (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to add product" });
      }
      return res.redirect("/api/products");
    });
  },

  showEditForm: (req, res) => {
    const productId = req.params.id;

    Product.getProductById(productId, (err, product) => {
      if (err) {
        return res.status(500).json({ error: "Database query error" });
      }

      if (!product) {
        return res.status(404).send("Product not found");
      }
      return res.render("editProduct", { product });
    });
  },

  updateProduct: (req, res) => {
    const productId = req.params.id;
    const productData = req.body;

    Product.updateProduct(productId, productData, (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to update product" });
      }

      return res.redirect("/api/products");
    });
  },
};

module.exports = productController;
