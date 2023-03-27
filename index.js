const express = require("express");
const connection = require("./db");
const userRouter = require("./routes/user.routes");
const cors = require("cors");
const auth = require("./middlewares/auth.middleware");
const postRouter = require("./routes/post.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use(auth);
app.use("/posts", postRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is running on ${process.env.port}`);
});
