import express from 'express';
const matRouter = express.Router();
import Matmodel from '../schema/matSchema.js';

matRouter.post('/matdetails',async (req,res)=>{
  const  matdocs = new  Matmodel(req.body);
  await matdocs.save();
  res.send('Success');
})

matRouter.get('/matOverall',async (req,res)=>{
  const data = await Matmodel.find();
  res.send(data);
})

matRouter.get('/matSpecific/:id',async (req,res)=>{
  const {id} = req.params;
  const data = await Matmodel.findOne({_id:id});
  res.send(data);
})

export default matRouter;