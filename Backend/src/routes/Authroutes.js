import express from 'express'
const authRouter = express.Router();

import { signupvalidation } from '../middleware/authMiddleware.js';

import Usermodel from '../schema/UserSchema.js'

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const saltrounds = 10;

authRouter.post('/signup', signupvalidation, async (req, res) => {

  try {

    const { firstname, lastname, email, password } = req.body;

    const checkDB = await Usermodel.findOne({ email: email });
    if (checkDB) {
      throw new Error("User is already in Database");
    }

    const hashPassword = await bcrypt.hash(password, saltrounds);

    const DBdocs = new Usermodel({
      firstname,
      lastname,
      email,
      password: hashPassword,
    });

    await DBdocs.save();

    res.status(201).json({
      message: "data has been saved in db successfully",
      data: DBdocs,
    })

  } catch (err) {
    res.status(500).send('Error occurred ' + err);
  }

})

authRouter.post('/signin', async (req, res) => {
  try {

    const { email, password } = req.body;

    const checkDB = await Usermodel.findOne({ email: email });
    if (!checkDB) {
      throw new Error("User is not in Database");
    }

    const checkHashPass = await bcrypt.compare(password, checkDB.password);

    if (!checkHashPass) {
      throw new Error("Password is incorrect");
    }

    const token = jwt.sign({ id: checkDB._id }, 'ecom125', { expiresIn: '7d' })
    res.cookie('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

    res.json(
      {
        message: "Logged in successfully",
        data: checkDB,
      }
    )


  } catch (err) {
    res.status(500).send("Error occurred " + err);
  }

})

export default authRouter;