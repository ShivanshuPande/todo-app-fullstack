const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.post("/" , (req,res)=>{
    const payload = req.body;
    
})