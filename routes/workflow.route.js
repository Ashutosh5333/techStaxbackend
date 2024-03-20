const express = require("express");

const { createPost, getPosts, getPost, createPosts } = require("../controller/workflow.controller");
const { authenticate } = require("../middleware/authenticate");

const workflowRouter = express.Router();


workflowRouter.post("/valcreate",authenticate,createPosts)
workflowRouter.get("/valdata", authenticate,getPosts)

//  validation

workflowRouter.post("/create",createPost)
workflowRouter.get("/data",getPost)



module.exports = workflowRouter