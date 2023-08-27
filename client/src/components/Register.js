import '../Style/Register.css'
import screenshot from '../Asset/screen.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Register =()=>{


  const [FullName,setfullname]= useState('')
  const [Email, setemail] = useState('')
  const [LastName,setLast]=useState('')
  const [password,setpassword]=useState('')
  const[confirmPassword,setconfirmPassword]=useState('')
  const[phone,setphone]=useState(0)
  const[OTP,setOTP]=useState(0)

   
  
  const handleSubmit = async() => {


    const formdata={FullName:FullName,Email:Email,OTP:OTP,password:password,confirmPassword:confirmPassword,phone:phone,LastName:LastName}
    console.log(formdata)
    try{
        const response=await axios.post("/regis",formdata)
        console.log(response)
        if(response.data.msg){
            alert("Registration successfully completed now Login to see profile")

        }
    

    }
    catch(error){
console.log(error)
alert('please fillout all the fields and check passwords are same')
    }
  };

  useEffect(()=>{
    const randomOtp=Math.floor(Math.random()*1234567)
    console.log(randomOtp);
    setOTP(randomOtp)
  },[])


  



    return(
      <>
      <img src={screenshot}></img>


        <div id='regform'>

            <h3 id='title'>Service provider Register</h3>
      <div className="rightSide">

        <form >
            <label id='first'>First Name*</label>
          <input name=" First Name"  type="text" onChange={(e)=>{setfullname(e.target.value)}}  value={FullName}/>
          <label id='em'>Email*</label>

          <input name="email"  type="email"  id='email' onChange={(e)=>{setemail(e.target.value)}}  value={Email}/>
          <label id='pass'> Password*</label>

          <input name="password" type="password" onChange={(e)=>{setpassword(e.target.value)}}  value={password}/>
          <label id='pho'>Phone*</label>

          <input type='number' name="phone" onChange={(e)=>{setphone(e.target.value)}}  value={phone}/>


          {/* <button type="submit"> Send Message</button> */}
        </form>
      </div>

      <div className="leftSide">

<form method='post' >
    <div id='ls'>
    <label id='last'>Last Name*</label>
  <input name="name"  type="text" onChange={(e)=>{setLast(e.target.value)}}  value={LastName}/>
  </div>
  <div id='co'>
  <label id='con'>Confrim  Password*</label>


  <input name="confirm password"  type='password' onChange={(e)=>{setconfirmPassword(e.target.value)}}  value={confirmPassword}/>
  </div>
  <div id='ot'>
  <label id='otp'>OTP*</label>

  <input type='number' name="OTP" id='o' 
  value={OTP}/>








  </div>


</form>
<h5>Service Provider Type</h5>

<div id='rad'>
  <input type='radio' id='B'/>
  <label id='BB'>B2B/Household</label>
  <input type='radio' id='L'/>
  <label id='LL'>Listing Services</label>
  <input type='radio' id='L'/>
  <label id='LL'>Education</label>
  <input type='radio' id='L'/>
  <label id='LL'>Storeservices</label>
  </div>


</div>
<div id='check'>
    <input type='checkbox'></input>
    <span>By creating an account you agree to our Terms and Conditons & Privacy Policy</span>

</div>
<div id='bts'>
    <button id='can'>CANCEL
    </button>
    <button  id='reg'  onClick={handleSubmit} > REGISTER</button>

</div>
<h3 id='man'>*Mentioned fields are mandatory</h3>



        </div>
        </>


    )
}
export default Register