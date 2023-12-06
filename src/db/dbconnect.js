import mongoose  from "mongoose";
import { DB_NAME } from "../contants.js";

const dbconnect = async()=>{
    try{
       const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
       console.log(`Mongodb connected : \n ${connectionInstance.connection.host}`);

    }catch{
        console.error("ERROR: database connection failed !!");
        process.exit(1);
    }
}
export default dbconnect;