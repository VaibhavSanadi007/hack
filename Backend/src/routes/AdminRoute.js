import express from "express";
import { authmiddleware } from "../middleware/authMiddleware.js";
import mousemodel from "../schema/MouseSchema.js";
import keymodel from "../schema/KeyboardSchema.js";
import deskmodel from "../schema/matSchema.js";
const AdminRouter = express.Router();

AdminRouter.post('/create',authmiddleware,async(req,res)=>{

})

AdminRouter.get('/read',authmiddleware,async(req,res)=>{

  const Mousedata = await mousemodel.find();
  const keydata = await keymodel.find();
  const deskdata = await deskmodel.find();
 
  const data = [...Mousedata,...keydata,...deskdata];

  res.send(data)
 
})

AdminRouter.patch('/update/:id',authmiddleware,async(req,res)=>{
  const {id} = req.params;

  //remove comments afterwards
  //pahele findbyid se id kis collection ki hai check karenge
  //then cloudinary se api key lenge
  //then findbyidandupdate se data update kardenge

  const Mousedata = await  mousemodel.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
  

})

AdminRouter.delete('/delete/:id',authmiddleware,async(req,res)=>{
try{

  const {id} = req.params;

 const mousedata = await mousemodel.findByIdAndDelete(id);
  const keydata =   await keymodel.findByIdAndDelete(id);
  const deskdata = await deskmodel.findByIdAndDelete(id);

if(mousedata || keydata || deskdata){
  res.send("deleted a item successfully");
}else{
  throw new Error("not deleted any item");
}

}catch(err){
  res.status(500).send("Error Occured :"+err);
}

})


export default AdminRouter;