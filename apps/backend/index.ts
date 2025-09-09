import express, { type Request, type Response } from "express";
import { prismaClient } from "db/client";
const app=express();

app.get("/users",(req:Request,res:Response)=>{
    prismaClient.user.findMany()
    .then(users =>{
        res.json(users);
    })
    .catch(err =>{
        res.status(500).json({error:err.message});
        })
    })

app.post("/user",(req:Request,res:Response)=>{
const {username,password}=req.body;

if(!username || !password){

    res.status(500).json({message:"username and password is required"});
}
prismaClient.user.create({
    data:{
        username,password
    }
}).then(user =>{
  res.status(201).json(user);
}) 
.catch(err=>{
    res.status(500).json({error:err.message})
})

})
app.listen(8080,()=>{
    console.log("server is running on 8080");
})