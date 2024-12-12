import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";//need to put .js extension otherwise it can't work becoz we use import syntex
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import path from "path";

import cookieParser from "cookie-parser";

import {app, server} from "./socket/socket.js"


const PORT=process.env.PORT || 5000;

const __dirname = path.resolve();//from node js

dotenv.config();

//middleware
app.use(express.json());//to parse tha incoming req with json payloads (from req body)
app.use(cookieParser());
//Routes Setup:
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running on ${PORT} `);
})