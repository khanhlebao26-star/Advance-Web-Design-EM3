const mongoose = require("mongoose");

const cakeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, default: null },
    category: { type: String, default: "Cake" },
    description: { type: String, default: "" },
    isSale: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "products",
  },
);

const Cake = mongoose.model("Cake", cakeSchema);

module.exports = Cake;
