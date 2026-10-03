const Product = require("../models/cakeModel");

exports.getHomePage = async (req, res) => {
  try {
    const newProducts = await Product.getCakesByType("new");
    const topProducts = await Product.getCakesByType("top");

    res.render("layout", { newProducts, topProducts });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching products");
  }
};
