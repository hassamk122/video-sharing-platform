import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



async function connectDatabase() {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.LOCAL_DATABASE_URI}/${DB_NAME}`);
        console.log(`\nMongodb connected! DB host: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("Couldn't connect to monogodb",error);
        process.exit(1);
    }
}

export default connectDatabase;