const express = require("express");
const { Registeruser, loginUser, getAllUsers } = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.post("/register",  Registeruser);
userRouter.post("/login", loginUser);
userRouter.get("/", getAllUsers);



module.exports = userRouter;
