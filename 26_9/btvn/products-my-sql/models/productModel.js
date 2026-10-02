const db = require("../config/database");

const Product = {
  getAllProducts: (callback) => {
    db.query("SELECT * FROM product", (err, results) => {
      if (err) return callback(err);
      return callback(null, results);
    });
  },

  createProduct: (productData, callback) => {
    db.query(
      "INSERT INTO product (name, price, description) VALUES (?, ?, ?)",
      [productData.name, productData.price, productData.description],
      (err, results) => {
        if (err) return callback(err);
        return callback(null, results);
      },
    );
  },

  getProductById: (id, callback) => {
    db.query("SELECT * FROM product WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err);
      return callback(null, results[0]);
    });
  },

  updateProduct: (id, productData, callback) => {
    db.query(
      `UPDATE product 
      SET name = ?, price = ?, description = ? WHERE id = ?`,
      [productData.name, productData.price, productData.description, id],
      callback,
    );
  },
};

module.exports = Product;
