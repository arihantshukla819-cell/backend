 import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

 
import dns from 'dns';
dns.setServers(["1.1.1.1","8.8.8.8"])






import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";








connectDB()










/*
import express from "express";
const app=express();


 (async ()=>{
try {
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error",()=>{
        console.log("err",error);
        throw error
     })
     app.listen(process.env.PORT,()=>{
        console.log(`app is listening on ${process.env.PORT}`)
     })
} catch (error) {
    console.error("Error",error)
    throw error
}
 })()
*/