import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import cors from 'cors';
import dbconnect from './db/database.js';

import MouseRouter from './routes/MouseRoute.js';
import keyRouter from './routes/KeyboardRoute.js';
import matRouter from './routes/matRoute.js';

app.use(cors({
    origin:"https://ecomui.onrender.com",
    credentials:true,
  }))

app.use(express.json());
app.use('/',MouseRouter);
app.use('/',keyRouter);
app.use('/',matRouter);

dbconnect().then(()=>{
  console.log("db connect hogaya bhaisab");
  app.listen(port,()=>{
    console.log("server connect hogaya bhaisab");
  })
}).catch(()=>{
  console.log("db did not connected");
})
