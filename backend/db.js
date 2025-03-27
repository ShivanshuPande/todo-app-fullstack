const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Shiv_2005:Shivanshu192005@cluster0.aw2rp.mongodb.net/");

const todoSchema = new mongoose.Schema({
    title:String ,
    description: String ,
    userId : {
        type: mongoose.Schema.Types.ObjectId, // creating the reference to Users
        ref: "Users" // give access to the user collection
    }
})

const Todos = mongoose.model("Todos" , todoSchema)


const userSchema = new mongoose.Schema({
    username:String ,
    password : String
    
})

const Users = mongoose.model("Users" , userSchema)

module.exports ={
    Todos , Users
}