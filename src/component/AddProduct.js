import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoery, setCategoery] = useState("");
  const [company, setCompany] = useState("");
  const addProduct=async(e)=>{
    e.preventDefault()
    const userId=JSON.parse(localStorage.getItem("User"))._id
     let result=await fetch("http://localhost:5000/add-product",{
        method:"post",
        body:JSON.stringify({name,price,categoery,company,userId}),
        headers:{
            "Content-Type":"application/json"
        }
     }) 
     result =await result.json()
     console.log(result)
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
        value={categoery}
        onChange={(e)=>setCategoery(e.target.value)}
        />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product company"
        value={company}
        onChange={(e)=>setCompany(e.target.value)}
      />
      <button className="AppButton" type="button" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
