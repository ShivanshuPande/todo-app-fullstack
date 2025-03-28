const express = require("express");
const cors = require("cors");
const { signupBody } = require("./types");
const { Users, Todos } = require("./db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
const { authMiddleware } = require("./authMiddleware");
const app = express();
app.use(express.json());
app.use(cors());

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

app.post("/signin" ,async (req ,res) => {
    try{
        const payload =  req.body ;
        
        const response = signupBody.safeParse(payload);
        
        if(!response.success){
            return res.status(411).json({
                msg : "Please Enter Valid Inputs"
            })
        }

        const user  =  await Users.findOne({
            username:payload.username , 
            password:payload.password
        });

        if(!user){
            return res.status(411).json({
                msg : "User doesnt exist , Please signup"
            })
        }

        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)
        
            res.status(200).json({
                token : token
            })



    }catch(err){
        console.log(err)
        res.json({
            msg : "Error while Logging In"
        })
    }
}) 


app.post("/todos" , authMiddleware , async(req,res)=>{
    try{const payload = req.body;

    const newTodo = await Todos.create({
        title : payload.title,
        description : payload.description,
        userId : req.userId
    })

    res.status(200).json({
        msg : "Todo Created Successfully" ,
        todo : newTodo
    })
    }catch(err){
            console.log(err)
            res.json({
                msg : "somethings wrong"
            })
    }
})

app.get("/todos", authMiddleware,async (req , res)=>{
    

    try{const response = await Todos.findOne({
            userId : req.userId
        })
        if(!response){
            return res.json({
                msg : "cannot find relevant todos"
            })
        }
    }catch(err){
        console.log(err)
        res.json({
            msg : "somethings wrong"
        })
    }
})

app.listen(3000,()=> console.log(`app is running on the port 3000`));