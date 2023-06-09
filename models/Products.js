import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    productType:{
        type:String,
        required:true
    },
    photos:{
        type: [String]
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    price:{
        type:Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model("Product",ProductSchema);
export default Product;