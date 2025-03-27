const express = require("express");
const cors = require("cors");
const { signupBody } = require("./types");
const { Users } = require("./db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
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

app.post("signin" , (res ,req) => {
    try{
        const payload =  req.body ;
        
        const response = signupBody.safeParse(payload);
        
        if(!response.success){
            return res.status(411).json({
                msg : "Please Enter Valid Inputs"
            })
        }

        const user  =  Users.findOne({
            username:payload.username , 
            password:payload.password
        });

        if(!user){
            return res.status(411).json({
                msg : "User doesnt exist , Pls signup"
            })
        }

        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)
        
        res.status(200).json({
            token : token
        })



    }catch{
        res.json({
            msg : "Error while Logging In"
        })
    }
})