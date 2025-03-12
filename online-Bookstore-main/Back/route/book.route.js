import express from "express"
import {getBook} from "../controller/book.controller.js"
// {getBook} esa krna h to seede whi ka variable use kr skte h 
const router=express.Router();
router.get("/",getBook);//"/"isme aate he router hme getbook me le jyega
export default router;