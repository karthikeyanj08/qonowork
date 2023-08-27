import mongoose  from'mongoose';

const userSchema = new mongoose.Schema({
  FullName: {
    type: String,
     required: true,
    maxlength: 50,
    match: /^[A-Za-z ]+$/,
  },
  LastName:{
    type:String,
    required:true
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    match: /^(?=.*[A-Z])(?=.*\d).+$/,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    match: /^\d{10}$/,
  },
  OTP: {
    type: Number,
    required: true,
  },
  token:{
    type:String,
    

  }
 });

const User = mongoose.model('User', userSchema);

export default User;

