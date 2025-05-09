const Products = require("../models/products");

const getallProducts = async (req, res) => {
  try {
    const allProducts = await Products.find({});
    if (!allProducts) {
      return res.status(401).json({ message: "products not found" });
    }

    res.json(allProducts);

    return res.status(200).json({ message: "succesfully gets products" });
  } catch (error) {
    return res.status(500).json({ message: "internal servrer error", error });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Products.findById(id);
    if (!item) {
      return res.status(401).json({ message: "item not found" });
    }
    res.json(item);

    return res.status(200).json({ message: "item found" });
  } catch (error) {
    return res.status(500).json({ message: "internal servrer error", error });
  }
};
module.exports = { getallProducts,getProductById };
