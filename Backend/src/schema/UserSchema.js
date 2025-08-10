import mongoose from "mongoose";
import validator from "validator";
const userschema = mongoose.Schema({
  firstname:{
    type:String,
    trim:true,
    required:true,
    minLength:2,
    maxLength:15,
  },
  lastname:{
    type:String,
    trim:true,
    required:true,
    minLength:2,
    maxLength:15,
  },
  email:{
     type:String,
    trim:true,
    required:true,
    minLength:10,
    maxLength:254,
    validate: (value)=>{
      return validator.isEmail(value);
    },
    message:"Incorrect Email Address",
  },
  password:{
      type:String,
    trim:true,
    required:true,
    minLength:4,
    validate: (value)=>{
      return validator.isStrongPassword(value);
    },
    message:"Strong password required"
  },
  photourl:{
    type:String,
    trim:true,
  },
},{
  timestamps:true,
});

export default mongoose.model('user',userschema);