import express from 'express';
const keyRouter = express.Router();
import Keyboardmodel from '../schema/KeyboardSchema.js';

keyRouter.post('/keydetails',async (req,res)=>{
  const  keydocs = new  Keyboardmodel(req.body);
  await keydocs.save();
  res.send('Success');
})

keyRouter.get('/keyOverall',async (req,res)=>{
  const data = await Keyboardmodel.find();
  res.send(data);
})

keyRouter.get('/keySpecific/:id',async (req,res)=>{
  const {id} = req.params;
  const data = await Keyboardmodel.findOne({_id:id});
  res.send(data);
})

export default keyRouter;