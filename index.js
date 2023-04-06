const express = require("express");
const cors = require("cors");
const connection = require("./db");
const { userRoutes } = require("./routes/user.routes");
const { calculateRoute } = require("./routes/calculator.routes");
const appoinmentRoutes = require("./routes/appointment.route");
const userRouter = require("./routes/users.route");

const app = express();
app.use(cors());
// app.use(Auth)
app.use(express.json());
app.use("/user", userRoutes);
app.use("/calculte", calculateRoute);

// new mock 13
app.use("/users", userRouter);
app.use("/appoinment", appoinmentRoutes);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is running on ${process.env.port}`);
});

// const express = require("express");
// const connection = require("./db");
// const userRouter = require("./routes/user.routes");
// const cors = require("cors");
// // const auth = require("./middlewares/auth.middleware");
// const calculateRoute = require("./routes/calculator.routes");
// require("dotenv").config();

// const app = express();
// app.use(cors());

// app.use(express.json());

// app.use("/users", userRouter);
// // app.use(auth);
// // app.use("/posts", postRouter);

// app.use("/calculte", calculateRoute);

// app.listen(process.env.port, async () => {
//   try {
//     await connection;
//     console.log("connected to db");
//   } catch (err) {
//     console.log(err);
//   }
//   console.log(`server is running on ${process.env.port}`);
// });
