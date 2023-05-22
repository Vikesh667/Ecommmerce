import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const registerUser=async(e)=>{
     e.preventDefault()
     let result=await fetch("http://localhost:5000/register",{
      method:"post",
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
     })
     result=await result.json()
        localStorage.setItem("User",JSON.stringify(result.result))
        localStorage.setItem("token",JSON.stringify(result.auth))
       navigate('/')
    }
   
  useEffect(()=>{
    const auth=localStorage.getItem("User")
    if(auth){
       navigate('/')
    }
  })
  return (
    <div className="register">
      <h1>Register</h1>
      <input className="inputBox"
       type="text"
       value={name} onChange={(e)=>setName(e.target.value)}
        placeholder="Enter Name" />
      <input className="inputBox"
       type="text"
       value={email} onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter Email" />
      <input
        className="inputBox"
        type="password"
        value={password} onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button className="AppButton" type="button" onClick={registerUser}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
