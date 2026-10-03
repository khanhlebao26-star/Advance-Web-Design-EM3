const Product = require("../models/cakeModel");

const getHomePage = async (req, res) => {
  try {
    const newProducts = await Product.find({ isFeatured: false }).limit(4);
    const topProducts = await Product.find({ isFeatured: true }).limit(4);

    res.render("layout", { newProducts, topProducts });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading products");
  }
};

module.exports = {
  getHomePage,
};
