import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategoery] = useState("");
  const [company, setCompany] = useState("");
  const [error,setError]=useState(false)
  const navigate=useNavigate()
  const addProduct=async(e)=>{
    e.preventDefault()
 if(!name || !price || !category || !company){
    setError(true)
    return false

 }

    const userId=JSON.parse(localStorage.getItem("User"))._id
     let result=await fetch("http://localhost:5000/add-product",{
        method:"post",
        body:JSON.stringify({name,price,category,company,userId}),
        
        headers:{
            "Content-Type":"application/json",
            Authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
     }) 
     result =await result.json()
     navigate('/')
 }
  return (
    <div className="product">
      <h1>Add Prodcut</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
      { error && !name && <span className="invalid-input">Enter valid Name</span>}  
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product price"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        />
         { error && !price && <span className="invalid-input">Enter valid price</span>}  
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product categoery"
        value={category}
        onChange={(e)=>setCategoery(e.target.value)}
        />
         { error && !category && <span className="invalid-input1">Enter valid categoery</span>}  
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product company"
        value={company}
        onChange={(e)=>setCompany(e.target.value)}
      />
       { error && !company && <span className="invalid-input1">Enter valid company</span>}  
      <button className="AppButton" type="button" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
