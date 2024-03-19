
const {Workflow}  = require("../model/Workflow.model")

const createPost = async (req, res) => {
    try {
      const workPost = await Workflow.create(req.body);
    //   console.log("wokflow **********data ", workPost);
      res
        .status(201)
        .json({ message: "workflow post created successfully", workPost });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Something went wrong" });
    }
  };

  const getPosts = async (req, res) => {
    try {
        const allPosts = await Workflow.find();
        res.status(200).json(allPosts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};


  module.exports={createPost,getPosts}