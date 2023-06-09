import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import Users from "../models/Users.js";

export const register = async (req,res,next) =>{
    try {
        const salt =bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password,salt);

        const newUser = new Users({
            ...req.body,
            password: hashPassword
        });
        await newUser.save();
        res.status(200).send(newUser);
    } catch (error) {
        next(error)
    }
}

export const login = async (req,res,next) =>{
    try {
        const user = await Users.findOne({email:req.body.email});
        if(!user) return next(createError(404, "User not Found"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

        const {password, isAdmin, ...otherDetails} = user._doc;
        res.cookie("access_token", token, {httpOnly:true}).status(200).send({details: {...otherDetails}, isAdmin});
    } catch (error) {
        next(error)
    }
}