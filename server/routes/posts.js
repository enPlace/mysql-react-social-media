const express = require("express");
const router = express.Router();
const posts = require("../models/index").posts;

router.get("/", async (req, res) => {
  const allPosts = await posts.findAll({
    order: [["createdAt", "DESC"]],
  });
  res.send(allPosts);
});

router.get("/byId/:id", async (req, res) => {
  const requestId = req.params.id;
  const post = await posts.findAll({
    where: {
      id: requestId,
    },
  });
  res.send(post);
});

router.post("/", async (req, res) => {
  console.log(req.body.title);
  await posts.create(req.body);

  res.json(req.body);
});

module.exports = router;
