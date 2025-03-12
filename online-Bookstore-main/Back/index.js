// const express= require("express")//es6 se phle hm ye require lgate the pr ab hm import krte h 
// or import ko use krne k lie pkg.json me type module likho
// const dotenv=require("dotenv")//isko lelia ab ocnfig krlo

import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"
const app=express();

app.use(cors());//its a middelware   
app.use(express.json());
dotenv.config();
const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;


// mongodb connecct 
try{//mongoose k andr he hmara connect func hota h islie use instl krte h phle 
mongoose.connect(URI,{
    // useUnifiedTopology:true,//these r deprecated now 
    // useNewUrlParser:true,
});
console.log("connected to mongodb")
}
catch(error){
console.log("there is error in connecting",error);
}


// now defining routes

app.use("/book",bookRoute);
app.use("/user",userRoute);

















app.listen(PORT,()=>{
    console.log("listenin jhgj",PORT)
})