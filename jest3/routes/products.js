const express = require("express");
const router = express.Router();
const { createProduct } = require("../controller/products");

router.post("/", createProduct);

module.exports = router;
