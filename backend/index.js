const express = require('express');
const app = express();
const port = 3000
const{schema , idSchema} = require("./types");
const { todo } = require('./db');



app.use(express.json());


app.post("/todo"  ,  async(req,res)=>{
    //the supposed to be logic here
    const payload = req.body
    const result = schema.safeParse(payload);
    if (!result.success){
        res.status(411).json({
            msg:"please input a valid input"
        })
        return;
    }
    

    await todo.create({
        title : payload.title,
        description:payload.description,
        completed :false

    })
    res.json({msg:"Todo created Successfully"})
})

app.get("/todos" ,async (req,res)=>{
    //logic to fetch the entries in the database
     const todos = await todo.find({});
    //console.log(todos) //it will return a promise
    res.json({
        todos
    })
})

app.put("/completed" ,async  (req,res)=>{ //update data put is used
    //logic
    const result = idSchema.safeParse();
    if (!result.success){
        res.status(411).json({
            msg:"please input a valid input"
        })
    }
    await  todo.update({
        _id: req.body.id
    } ,{
        completed : true
    })
    res.json({
        msg:"todo marked as completed"
    })
    return;
})


app.delete("/" , (req,res)=>{
    //logic
})

app.listen(port , ()=>console.log("server is running on port number 3000x"))
