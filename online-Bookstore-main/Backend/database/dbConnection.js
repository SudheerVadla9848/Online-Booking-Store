
const mongoose=require("mongoose")

const connection= ()=>{ 
mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce-Database')
.then(()=>{
    console.log("database connected")
}).
catch((err)=>{
    console.log("error",err)
})
}

module.exports= connection;