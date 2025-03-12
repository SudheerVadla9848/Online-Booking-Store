import mongoose from "mongoose"

const bookSchema=mongoose.Schema({
    name:String,
    price:String,
    title:String,
    image:String,
    category:String,
});

const Book=mongoose.model("Book",bookSchema)
//Book name se bnega db me ye schema
export default Book;
