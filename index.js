import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'
import authRouter from "./src/router/authRouter.js";
import noteRouter from "./src/router/noteRouter.js";
import errorMiddleware from "./src/middlewares/ErrorMiddleware.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        credentials: true,
        origin: process.env.CLIENT_URL
    }
));
app.use('/auth', authRouter)
app.use('/', noteRouter)
app.use(errorMiddleware);
const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log('Server is running in port ' + PORT);
        })
    } catch (e) {
        console.log(e);
    }
}
start();