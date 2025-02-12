const { Router } = require("express");
const UserValidator = require("./Validators/UserValidator.js");
const UserController = require("./Controllers/UserController.js");

const router = Router();

//USER
router.post("/user", UserValidator.create, UserController.create);
router.get("/user", UserController.read);
router.delete("/user/:id", UserValidator.destroy, UserController.delete);
router.put("/user/:id", UserValidator.update, UserController.update);


module.exports = router;