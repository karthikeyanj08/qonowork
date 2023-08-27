import jwt  from 'jsonwebtoken';
import express from'express'
import User from "../Model/users.js";
import bcrypt from'bcrypt';
import cookie from 'cookie'
import { verifyTokenMiddleware } from '../Middleware/Middleware.js';
const Userrouter=new express.Router()






Userrouter.post("/regis", async (req, res) => {
  const {
    FullName, LastName,Email, password, confirmPassword, OTP,
    phone
  } = req.body;

  try {
    if (!FullName ||!LastName|| !Email || !password || !confirmPassword || !OTP || !phone) {
      return res.status(400).json({ error: "Please fill all the input fields" });
    }

    const existUser = await User.findOne({ Email });
    if (existUser) {
      return res.status(422).json({ error: "Email is already registered" });
    } else if (password !== confirmPassword) {
      return res.status(422).json({ error: "Password and Confirm Password should match" });
    }

    // Hash the password before saving it to the database
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const hashedconfimpass=await bcrypt.hash(confirmPassword,saltRounds)

    const data = new User({
      ...req.body,password:hashedPassword,confirmPassword:hashedconfimpass
    });

    await data.save();
    res.json({ msg: "Registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




export default Userrouter;