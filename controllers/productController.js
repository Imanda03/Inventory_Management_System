import Product from "../models/Products.js";

//add product
export const addProduct = async(req,res) =>{
    const newProduct = new Product(req.body);

  console.log(newProduct);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    next(error);
  }
}

//Update Products
export const updateProduct = async (req, res, next) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    next(error);
  }
};


//Delete Products
export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (error) {
    next(error);
  }
};


//Get Single Product
export const getSingleProducts = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

//Get All Products
export const getAllProducts = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const query = {
      ...others,
      price: {
        $gte: min || 1,
        $lte: max || 900,
      },
    };
    console.log(req.query);
    const products = await Product.find(query).limit();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};