const catchAsyncErrors = require("../middleware/catchError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Usermodel } = require("../model/User.model");


const Registeruser = catchAsyncErrors(async (req, res, next) => {
  const { email, password, name } = req.body;

  try {
    const userPresent = await Usermodel.findOne({ email });
    if (userPresent) {
      return res.status(400).json({ msg: "User is already present" });
    }

    bcrypt.hash(password, 4, async (err, hash) => {
      // console.log("hasssh", hash);
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "Error in hashing password" });
      }
      try {
        const user = new Usermodel({ email, password: hash, name });
        await user.save();
        res.status(201).json({ msg: "Signup successful" });
      } catch (error) {
        console.error("error form 53", error);
        res
          .status(500)
          .json({ msg: "Something went wrong, please try again later" });
      }
    });
  } catch (error) {
    console.error("error form 58", error);
    res
      .status(500)
      .json({ msg: "Something went wrong, please try again later" });
  }
});

/**** Login user  */

const loginUser = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Usermodel.findOne({ email });

    if (!user) {
      return res.status(404).send({msg:"User not registered"});
    }

    const hashedPassword = user.password;

    if (!hashedPassword) {
      return res.status(500).send("Hashed password not found");
    }

    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (passwordMatch) {
      const token = jwt.sign({ userId: user._id }, "hush", { expiresIn: '1h' });

      return res.json({
        msg: "Login successful",
        token: token,
        data: {
          name: user.name,
          email: user.email,
          _id: user._id,
        },
      });
    } else {
      return res.status(401).send("Please check password");
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).send("Authentication failed");
  }
});

/*** Get All users  */

const getAllUsers = async (req, res) => {
  try {
    const Alluser = await Usermodel.find().select("-password")
    res.send({ Alluserdata: Alluser });
  } catch (err) {
    res.send("somting went wrong");
  }
};

module.exports = { Registeruser, getAllUsers, loginUser };
