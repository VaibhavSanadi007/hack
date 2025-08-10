import jwt from 'jsonwebtoken'
import userModel from '../schema/UserSchema.js';
export const signupvalidation = (req,res,next)=>{
try{

     const {firstname,lastname,email,password} = req.body;
  if(!firstname || !lastname || !email || !password){
    throw new Error("invalid credentials");
  }else if(password.length<4){
    throw new Error("password length is too low")
  }

  next();

}catch(err){
  res.status(500).send("Error occurred "+err);
}
}

export const authmiddleware = async (req,res,next)=>{

 try{
  
  const {token} = req.cookies;
  console.log(req.cookies)

  const checkToken = jwt.verify(token,'ecom125');

  const { id } = checkToken;

  const user_data = await userModel.findOne({ _id: id });

  if (!user_data) {
    throw new Error("user not found");
  }

  req.user = user_data;
  
  next();
}catch(err){
  res.status(500).send("Error Occured "+err);
}

}
