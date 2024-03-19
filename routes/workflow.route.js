const express = require("express");
const Workflow = require("../model/Workflow.model");
const { createPost, getPosts } = require("../controller/workflow.controller");


const workflowRouter = express.Router();


workflowRouter.post("/create",createPost)
workflowRouter.get("/data",getPosts)



module.exports = workflowRouter