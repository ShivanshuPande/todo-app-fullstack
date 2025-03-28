const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(403).json({
                msg: "No token provided",
                details: "Authorization header is missing or invalid"
            });
        }

        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, JWT_SECRET);

        

        
        if (!decoded || !decoded.userId) {
            return res.status(401).json({
                msg: "Invalid token",
                details: "Token does not contain a valid user ID"
            });
        }

        
        req.userId = decoded.userId;
        next();

    } catch (err) {

        return res.status(500).json({
            msg: "Authentication error",
            details: err.message
        });
    }
}

module.exports = { authMiddleware }