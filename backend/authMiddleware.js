const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");


const authMiddleware = (req , res , next) =>{
    try{const authHeader =  req.headers.authorization;

    if(!authHeader|| !authHeader.startsWith('Bearer ')){
        return res.status(403).json({
            msg : "not a bearer or empty Token"
        })
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, JWT_SECRET);

    if(decoded.userId){
        req.userId = decoded.userId;
        next();
    }
    res.json({
        msg : "Invalid token"
    })}catch(err){
        return res.json({
            msg : "Something went wrong"
        })
    }
}

module.exports = {authMiddleware}