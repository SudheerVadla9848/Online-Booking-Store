const express=require("express")
const Collection =require("../Models/userModels")

const createUser= async (req,res)=>{
try{
const {name,email,phone,password}=req.body;
const {data}=await Collection.create({name,email,phone,password})
res.status(400).json({
    success:true,
    message:"user successdully created",
    data
})
}catch(err){
res.status(500).json({
    success:false,
    message:"not creted",

});
}
}
module.exports={createUser}