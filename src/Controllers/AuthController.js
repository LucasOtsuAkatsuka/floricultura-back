const UserModel = require("../Models/user.js")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController {
    async login(req, res) {
        try {
            const { email, password } = req.body;

            const userFind = await UserModel.findOne({ email }).select("+password");
            
            if(!userFind){
                return res.status(403).json({message: "Email or password invalid"});
            }

            const isMatch = await bcrypt.compare(password, userFind.password);

            if(!isMatch){
                return res.status(403).json({message: "Email or password invalid"});
            }

            const {password: hashedPassword, ...user} = userFind.toObject();

            const token = jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE_IN});

            res.status(200).json({token});
        } catch (error) {
           res.status(500).json({message: error.message}); 
        }
    }
}

module.exports = new AuthController();