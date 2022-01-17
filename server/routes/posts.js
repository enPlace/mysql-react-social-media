const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const posts = require("../models/index").posts;

/* app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario */

router.get("/", (req, res) => {
  res.send("hello there you");
});

router.post("/", async (req, res) => {
  console.log(req.body.title);
  await posts.create(req.body);
  //res.json(post);
  res.json("this worked");
});

module.exports = router;
