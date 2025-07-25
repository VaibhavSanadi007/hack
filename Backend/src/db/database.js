import mongoose from 'mongoose';
import 'dotenv/config';

const dbconnect = async ()=>{
  await mongoose.connect(process.env.DATABASE_URL);
}

export default dbconnect;