const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/products", productController.getProducts);
router.get("/products/add", productController.showAddProductForm);
router.post("/products", productController.addProduct);
router.get("/products/:id/edit", productController.showEditForm);
router.post("/products/:id/update", productController.updateProduct);

module.exports = router;
