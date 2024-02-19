import express from "express";
import * as dotenv from 'dotenv';
import connect from "../framework/database/mongo-db-connect";
import userRouter from "../framework/express/router/user.js"
dotenv.config()


const app = express();
const mongoUrl : string= process.env.MONGO_URL || "";

connect(mongoUrl)

app.use(express.json());

app.use("/",userRouter);

const PORT : string | number = process.env.PORT || 8080


app.listen(8080,()=>console.log("server started at ",PORT))