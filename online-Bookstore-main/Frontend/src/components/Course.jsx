// import React,{useEffect,useState} from 'react'
// import { Link } from "react-router-dom";
// import Cards from "./Cards";

// // import list from '../../public/list.json'

// const Course = () => {
//   const [book, setBook] = useState([]);
// useEffect(()=>{
// const getBook=async()=>{
//   try{
//     const res=await axios("https://localhost:4001/book");
//     console.log(res.data);//res.data mtlb jo b response me property hoti h data ki wo de dega

//     setBook(res.data);


//   }
//   catch(err){
//     console.log("hehehe error",err);
//   }
// }
// },[])
//   return (
// <>
// <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div className="mt-28 items-center justify-center text-center">
//           <h1 className="text-2xl  md:text-4xl">
//             We're delighted to have you{" "}
//             <span className="text-pink-500"> Here! :)</span>
//           </h1>
//           <p className="mt-12">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
//             assumenda? Repellendus, iste corrupti? Tempore laudantium
//             repellendus accusamus accusantium sed architecto odio, nisi expedita
//             quas quidem nesciunt debitis dolore non aspernatur praesentium
//             assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
//             animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
//             consequatur!
//           </p>
//           <Link to="/">\
//             <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
//               Back
//             </button>
//           </Link>
//         </div>
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          
//          { book.map((item) =>(
//             <Cards key={item.id} item={item}/>
//           ))}
//         </div>
//       </div>


// </>


//   )
// }

// export default Course


import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
                  
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-blue-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
          Step into a realm where every page holds a new adventure, a fresh insight, and a timeless escape. Our collection of books invites you to wander through worlds both real and imagined, to explore the depths of human emotion, and to discover the boundless possibilities of the written word. Lose yourself in stories that inspire, inform, and ignite your imagination. Welcome to a sanctuary where every book is a doorway to endless wonder and discovery.
          </p>
          <Link to="/">
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
