import express from 'express';
const mouseRouter = express.Router();
import MouseModel from '../schema/MouseSchema.js';

mouseRouter.post('/mousedetails',async (req,res)=>{
  const Mousedocs = new MouseModel(req.body);
  await Mousedocs.save();
  res.send('Success');
})

mouseRouter.get('/mouseOverall',async (req,res)=>{
  const data = await MouseModel.find();
  res.send(data);
})

mouseRouter.get('/mouseSpecific/:id',async (req,res)=>{
  const {id} = req.params;
  const data = await MouseModel.findOne({_id:id});
  res.send(data);
})

export default mouseRouter;