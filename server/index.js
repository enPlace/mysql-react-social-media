const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = require("./models");

//Routers
const homeRouter = require("./routes/home");
app.use("/", homeRouter);

const postRouter = require("./routes/posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
});
