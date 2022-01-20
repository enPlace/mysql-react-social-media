const express = require("express");
const router = express.Router();
const comments = require("../models/index").comments;

router.get("/:id", async (req, res) => {
  const requestId = req.params.id;
  const queryComments = await comments.findAll({
    where: {
      postId: requestId,
    },
  });
  res.send(queryComments);
});

module.exports = router;
