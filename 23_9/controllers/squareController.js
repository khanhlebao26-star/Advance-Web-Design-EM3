const Square = require("../models/square");

exports.showForm = (req, res) => {
  res.render("index", {
    result: null,
  });
};

exports.calculate = async (req, res) => {
  const side = Number(req.body.side);
  const area = side * side;
  const perimeter = 4 * side;
  const square = await Square.create({
    side: side,
    area: area,
    perimeter: perimeter,
  });

  res.render("index", {
    result: square,
  });
};
