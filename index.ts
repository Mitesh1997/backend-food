import  express from "express";

const app=express();

app.use('/',(req,res)=>{
    return res.json('Hello from food order .gitignore ')
})


app.listen(8000,()=>{
    console.log(`app is running on port:8000`);
    })