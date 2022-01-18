const express = require("express");
const router = express.Router();
const posts = require("../models/index").posts;

router.get("/", async (req, res) => {
  const allPosts = await posts.findAll();
  console.log(allPosts);
  res.send(allPosts);
});

router.post("/", async (req, res) => {
  console.log(req.body.title);
  await posts.create(req.body);

  res.json(req.body);
});

module.exports = router;
