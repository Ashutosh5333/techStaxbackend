const express = require("express");

const { createPost, getPosts, getPost, createPosts, deletepost } = require("../controller/workflow.controller");
const { authenticate } = require("../middleware/authenticate");

const workflowRouter = express.Router();


workflowRouter.post("/valcreate",authenticate,createPosts)
workflowRouter.get("/valdata", authenticate,getPosts)
workflowRouter.delete("/valdata/:id", authenticate,deletepost)
//  validation

workflowRouter.post("/create",createPost)
workflowRouter.get("/data",getPost)



module.exports = workflowRouter