import express from "express";
import { addProduct, deleteProduct, getAllProducts, getSingleProducts, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/",addProduct);

router.put("/:id", updateProduct);

router.delete("/:id",deleteProduct);

router.get("/find/:id",getSingleProducts);

router.get("/",getAllProducts);

export default router;