const UserModel = require("../Models/user.js");

class UserController{

    async create(req, res){
        try {
            const user = await UserModel.create(req.body);
            console.log("User created successfully");
            const {senha, ...newUser} = user.toObject();
            res.status(200).json(newUser);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async read(req, res){
        try {
            const users = await UserModel.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async update(req, res){
        try {
            const {id} = req.params;
            const userFind = await UserModel.findById(id);

            if(!userFind){
                return res.status(404).json({message: "User not found"})
            }

            const user = await userFind.set(req.body).save();

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async delete(req, res){
        try {
            const {id} = req.params;
            const userFind = await UserModel.findById(id);

            if(!userFind){
                return res.status(404).json({message: "User not found"})
            }

            const user = await userFind.deleteOne();

            res.status(200).json({message: "User deleted successfully"});
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

}

module.exports = new UserController();