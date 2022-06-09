const productModel = require("../models/Product");

const createProduct = (req, res, next) => {
  productModel.create(req.body);
  res.status(201).send();
};

module.exports = { createProduct };
