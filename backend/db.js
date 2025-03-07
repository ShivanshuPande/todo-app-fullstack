//this is the database file
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Shiv_2005:Shivanshu192005@cluster0.aw2rp.mongodb.net/")


const todoSchema  = new mongoose.Schema({
    title: String ,
    description : String , 
    completed :Boolean
})
const todo = mongoose.model("todo" , todoSchema)

module.exports = {
    todo
}
//todo.Create
//todo.Find
//todo.findone 
//mention an attribute that is also present with the attributes in the data-base use that to access that 

// await mongoose connect if the database is auth enabled