const { Workflow } = require("../model/Workflow.model");

const createPost = async (req, res) => {
  try {
    const { ...postData } = req.body;
      // console.log("user",req.userId)
  
  const workPost = await Workflow.create({ ...postData, userId:req.userId });
      console.log("wokflow **********data ", workPost);
    res
      .status(201)
      .json({ message: "workflow post created successfully", workPost });
    // res.send("okkkk")
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

  const getPost = async (req, res) => {
    try {
        const allPosts = await Workflow.find();
        res.status(200).json(allPosts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};

// 
const getPosts = async (req, res) => {
  console.log("userid********", req.userId);
  try {
    const productData = await Workflow.find({ userId: req.userId });
    res.send(productData);
  } catch (err) {
    console.log(err);
    res.send("Not authorized");
  }
};

module.exports = { createPost, getPosts ,getPost};
