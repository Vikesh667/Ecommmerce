import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate=useNavigate()
  const handleLogin=async(e)=>{

    e.preventDefault()
     let result=await fetch("http://localhost:5000/login",{
     method:"post",
     body:JSON.stringify({email,password}),
     headers:{
       'Content-Type':'application/json'
     }
    }
     )
     result =await result.json()
     console.log(result)
     if(result.auth){
      localStorage.setItem("User",JSON.stringify(result.user))
      localStorage.setItem("token",JSON.stringify(result.auth))
      navigate('/')
     }
  }
  useEffect(()=>{
    const auth=localStorage.getItem("User")
     if(auth){
      navigate('/')
     }
  })
  return (
    <div className='login'>
      <h2>Login</h2>
     <input className='inputBox' type='text' placeholder='Enter email' value={email} onChange={(e)=>setEmail
    (e.target.value)}/>
     <input className='inputBox' type='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword
    (e.target.value)}/>
     <button className="AppButton" type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default Login