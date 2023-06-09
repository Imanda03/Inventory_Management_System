import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js"
import productRoutes from "./routes/product.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.mongoURL);
    console.log("Database has been connected");
}

app.use(cookieParser())
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes );
app.use("/api/product",productRoutes)

app.use((err,req,res,next) =>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong...";
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is connected at ${process.env.PORT}`);
    connect()
})