const { Router } = require("express");
const multer = require("multer");
const UserValidator = require("./Validators/UserValidator.js");
const UserController = require("./Controllers/UserController.js");
const flowerValidator = require("./Validators/FlowerValidator.js");
const flowerController = require("./Controllers/FlowerController.js");
const verifyJwt = require("./Middlewares/verificarJwt.js");
const AuthController = require("./Controllers/AuthController.js");
const authValidator = require("./Validators/authValidator.js");

const router = Router();

const upload = multer({storage: multer.memoryStorage()});

//USER
router.post("/user", UserValidator.create, UserController.create);
router.get("/user",verifyJwt, UserController.read);
router.delete("/user/:id",verifyJwt, UserValidator.destroy, UserController.delete);
router.put("/user/:id",verifyJwt, UserValidator.update, UserController.update);


//FLOWER
router.post("/flower",verifyJwt, upload.single("image"),flowerValidator.create, flowerController.create)
router.get("/flower")
router.get("/flower/:id")
router.delete("/flower/:id")
router.put("/flower/:id")


//LOGIN
router.post("/login", authValidator.login, AuthController.login);


module.exports = router;