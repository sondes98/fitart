const cloudinary = require("../helpers/cloudinary");
const product = require("../Models/productSchema");

/**
 *@param<string>
 */

const addProduct = async (req, res) => {
  try {
    const newBody = JSON.parse(req.body.info);
/*     const imageInfo = await cloudinary.uploader.upload(req.file.path);
 */    const newProduct = await product.create({
      expDate: newBody.expDate,
      description: newBody.description,
      title: newBody.title,
      price: newBody.price,
      quantity: newBody.quantity,
      owner: newBody.owner,
/*       image: { imageURL: imageInfo.url, public_id: imageInfo.public_id },
 */    });
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getProducts = async (req, res) => {
  try {
    const Products = await product.find({}).populate("");
    res.json(Products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const Product = await product.findById(req.params.id);
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { description, title } = req.body;
    const updatedProduct = await product.findByIdAndUpdate(req.params.id, {
      expDate,
      description,
      title,
      price,
      quantity,
      owner,
      image,
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await product.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  deleteProduct,
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
};
