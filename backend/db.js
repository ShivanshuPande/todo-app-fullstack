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

// await mongoose connect if the database is auth enabled