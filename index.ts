import  express from "express";
import bodyPaser from 'body-parser'
import mongoose from "mongoose";
import { AdminRoute,vandorRoute } from "./routes";
import { MONGO_URI } from "./config";


const app=express();

app.use(express.json());
app.use(bodyPaser.urlencoded({extended:true}))


app.use('/admin',AdminRoute);
app.use('/vandor',vandorRoute);

mongoose.connect(MONGO_URI)
    .then((result) => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
app.listen(8000,()=>{
    console.clear();
    console.log(`app is running on port:8000`);
    })