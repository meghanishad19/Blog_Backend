import mongoose, { trusted } from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: trusted
    },
    password:{
        type:String,
        required:true
    },
    blogs:[{type:mongoose.Types.ObjectId,ref:"Blog",required:true }]
});

export default mongoose.model("User", userSchema);
//users