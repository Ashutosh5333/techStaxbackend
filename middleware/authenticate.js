const jwt = require("jsonwebtoken");


const authenticate = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (token) {
    const decoded = jwt.verify(token, "hush");
    if (decoded) {
      const userId = decoded.userId;
      req.userId = userId;
       console.log("decode",decoded)
      console.log("coming from middleware**********",userId);
      next();
    } else {
      res.send({ msg: "you are not authenticated login please" });
    }
  } else {
    res.send({ msg: "you are not authenticated" });
  }
};

module.exports = { authenticate };
