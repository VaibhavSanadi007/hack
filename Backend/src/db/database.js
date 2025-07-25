import mongoose from 'mongoose';

const dbconnect = async ()=>{
  await mongoose.connect('mongodb+srv://vaibhavbhausanadi007:000999@justflex.xzcxkxf.mongodb.net/meckeydb');
}

export default dbconnect;