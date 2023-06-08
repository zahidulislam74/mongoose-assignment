const express = require("express");
const Product = require("../models/product");

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({}, "name price");
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
