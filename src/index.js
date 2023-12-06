// import mongoose  from "mongoose";
// import { DB_NAME } from "./contants";
// import express from "express";

// const app = express();

import dotenv from "dotenv";
import dbconnect from "./db/dbconnect.js";
import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";

const app = express();


dotenv.config();
app.use(cors({
    origin: process.env.CORS
}));






dbconnect()
  .then(() => {
    const port = process.env.PORT || 8888;

    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error("ERROR: Database connection failed...", error);
  });






































// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
//         app.on((error)=>{
//           console.log("ERROR: Server error db not connect for Server Error", error)
//           throw error
//         });

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         });

//     }catch(error){
//         console.error("ERROR: Database is not connect", error);
//         throw error;
//     }
// })();

