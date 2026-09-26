const express = require("express");
const router = express.Router();

const squareController = require("../controllers/squareController");
router.get("/", squareController.showForm);
router.post("/square", squareController.calculate);

module.exports = router;
