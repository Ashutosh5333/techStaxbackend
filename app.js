const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*"
  })
);

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello");
});

const work = require('./routes/workflow.route')
const user = require('./routes/user.route')

app.use("/work",work)
app.use("/user",user)



module.exports = app;
