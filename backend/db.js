const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Shiv_2005:Shivanshu192005@cluster0.aw2rp.mongodb.net/");

const todoSchema = new mongoose.schema({
    todo:String ,
    description: String
})

const Todos = mongoose.model("Todos" , todoSchema)


const userSchema = new mongoose.schema({
    username:String ,
    password : String
})

const Users = mongoose.model("Users" , userShema)

module.exports ={
    Todos
}