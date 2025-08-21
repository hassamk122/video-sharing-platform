import dotenv from "dotenv";
import connectDatabase from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path : "./env"
});

const PORT = process.env.PORT || 4000;

connectDatabase()
.then(()=>{
    app.listen(PORT,()=>console.log(`App started at port : ${PORT}`));
})
.catch((error)=>{
    console.log("Failed to connect to  mongodb ",error);
})