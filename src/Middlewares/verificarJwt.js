const jwt = require("jsonwebtoken");

function verifyJwt(req, res, next){
    const authHeader = req.headers.authorization || req.headers.Authorization

    if(!authHeader){
        return res.status(403).json({message: "Header not found"})
    }

    const [bearer, token] = authHeader.split(" ");
    
    if(!/^Bearer$/.test(bearer)){
        return res.status(403).json({message: "Invalid header"});
    }

    if(!token){
        return res.status(403).json({message: "Token not found"});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{
        if(err){
            return res.status(403).json({message: "Invalid token"});
        }
        req.userId = decoded.user?._id;

        next();
    })
}

module.exports = verifyJwt;