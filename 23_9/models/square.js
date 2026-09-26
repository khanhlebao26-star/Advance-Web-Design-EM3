const mongoose = require("mongoose");

const squareSchema = new mongoose.Schema({
  side: {
    type: Number,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  perimeter: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Square", squareSchema);
