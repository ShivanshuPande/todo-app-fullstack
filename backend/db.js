const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Shiv_2005:Shivanshu192005@cluster0.aw2rp.mongodb.net/");

const todo = new mongoose.schema({
    todo:String ,
    description: String ,
    isCompleted : Boolean
})

const Todos = mongoose.model("Todos" , todo)


const userSchema = new mongoose.schema({
    username:String ,
    password : String
})

const Users = mongoose.model("Users" , userShema)

module.exports ={
    Todos
}