const express = require("express");
const router = express.Router();
const cakeController = require("../controllers/cakeController");

router.get("/", cakeController.getHomePage);

module.exports = router;
