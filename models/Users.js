import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true
        }, 
        img:{
            type: String
        },
        phone:{
            type: Number,
            required: true
        },
        password:{
            type:String,
            required: true
        },
        isAdmin:{
            type: Boolean,
            default:false
        }
    }, {timestamps: true}
);

export default mongoose.model("User", UserSchema)