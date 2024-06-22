import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB!");
}).catch(err => {
    console.log(err);
})
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})

// jkooZ4H88Md5Hwv3 - password for mongodb atlas database
// "mongodb+srv://kumar699abhishek:jkooZ4H88Md5Hwv3@mern-estate.t2ms6ip.mongodb.net/" - connection string"

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);