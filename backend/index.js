const express = require("express");
const cors = require("cors");
const { signupBody } = require("./types");
const { Users } = require("./db");
const app = express();
app.use(express.json());

app.post("/signUp" , async(req,res)=>{
    try{
        const payload = req.body;

        const response = signupBody.safeParse(payload);
        
        if(!response.success){
            return res.status(411).json({msg : "Please Enter Valid Inputs"});
        }
        
        const preUser = await Users.findOne({
            username : payload.username
        })

        if(preUser){
            return res.status(411).json( {msg :"Username already exist please use another one"});
        }

        await Users.create({
            username : payload.username ,
            password : payload.password
        })
        res.status(200).json({msg : "User created sucessfully , Welcome to the platform"});
    }catch{
        res.status(500).json({msg : "Some Error occured dont worry its not your fault"})
    }
    
})