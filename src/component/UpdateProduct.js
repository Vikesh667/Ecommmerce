import React, { useEffect, useState } from "react";
import {useParams,useNavigate} from "react-router-dom"
const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategoery] = useState("");
  const [company, setCompany] = useState("");
  const navigate=useNavigate()

  const getProductDetails=async()=>{
    let result= await fetch(`http://localhost:5000/product/${params.id}`,{
      headers:{
        Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    result =await result.json()
    setName(result.name)
    setPrice(result.price)
    setCategoery(result.category)
    setCompany(result.company)
  }

  useEffect(()=>{
    getProductDetails()
  },[])
  const params=useParams()
  const updateProduct=async(e)=>{
    e.preventDefault()
  let result =await fetch(`http://localhost:5000/product/${params.id}`,
  {
    method:"Put",
    body:JSON.stringify({name,price,category,company}),
    headers:{
        'Content-Type':"application/json",
        Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
  })
   result=await result.json()
   navigate('/')
    
 }

  return (
    <div className="product">
      <h1>Update Prodcut</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
    
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product price"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        />
      
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product categoery"
        value={category}
        onChange={(e)=>setCategoery(e.target.value)}
        />
        
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product company"
        value={company}
        onChange={(e)=>setCompany(e.target.value)}
      />
       
      <button className="AppButton" type="button" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
