import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("User"))
        setUser(data)
    },[])
  return (
    <div>
        <ul>
            <li>Name:{user.name}</li>
            <li>Email:{user.email}</li>
        </ul>
    </div>
  )
}

export default Profile