const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello");
});

const work = require('./routes/workflow.route')

app.use("/work",work)




module.exports = app;
