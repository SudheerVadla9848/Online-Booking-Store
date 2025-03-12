 
const express=require("express")
const connection = require("./database/dbConnection")
const cors=require("cors")
const app=express()
const router=require("./Routers/router")
const port=4000;

 
app.use(express.json())
// app.use(cors())
app.use("/api/v1",router)
connection();


app.listen(port,(req,res)=>{
    console.log("server is running in port ",port)
})