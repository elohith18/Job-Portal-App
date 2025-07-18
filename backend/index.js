import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js';
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1/users', userRoute);
const corsOptions = {
  origin: 'http://localhost:3000', // Adjust this to your frontend URL     
    credentials: true,
};
app.use(cors(corsOptions));
