const express = require("express");
const connection = require("./db");
const userRouter = require("./routes/user.routes");
const cors = require("cors");
// const auth = require("./middlewares/auth.middleware");
const calculateRoute = require("./routes/calculator.routes");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/users", userRouter);
// app.use(auth);
// app.use("/posts", postRouter);

app.use("/calculte", calculateRoute);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is running on ${process.env.port}`);
});
