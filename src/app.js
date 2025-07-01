import mongoose from "mongoose";
import { DB_NAME } from "./constants"














/*
import express from "express"
const app = express()

( async () => {// always start with ; in proff Backend
     try{
        await mongoose.connect(`${process.env.MONODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
     }catch(error){
        console.log("ERROR: ", error)
        throw err
     }
})()*/