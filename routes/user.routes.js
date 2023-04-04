const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/users.model");
const userRoutes = express.Router();
userRoutes.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        const User = UserModel({
          name,
          email,
          password: hash,
        });
        await User.save();
        res.send("registered successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

userRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await UserModel.find({ email });
    if (User.length > 0) {
      bcrypt.compare(password, User[0].password, async (err, result) => {
        if (result) {
          const token = jwt.sign({ Id: User[0]._id }, "masai");
          res.send({ msg: "Login Successful", token: token });
        } else {
          res.send({ msg: "Invalid Credentials" });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

userRoutes.get("/profile", async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await UserModel.find({ email });
    if (User.length > 0) {
      bcrypt.compare(password, User[0].password, async (err, result) => {
        if (result) {
          const token = jwt.sign({ Id: User[0]._id }, "masai");
          res.send({
            msg: "Profile",
            User,
          });
        } else {
          res.send({ msg: "Invalid Credentials" });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = {
  userRoutes,
};
















// const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const UserModel = require("../models/users.model");

// const userRouter = express.Router();

// //  -- to register the user
// userRouter.post("/register", async (req, res) => {
//   const { email, password, name, gender, age, city, is_married } = req.body;
//   try {
//     const isEmail = await UserModel.findOne({ email: email });
//     if (isEmail) {
//       res.status(400).send({ message: "Email already exists, Please Login" });
//     } else {
//       bcrypt.hash(password, 4, async (err, hash) => {
//         const payload = {
//           name,
//           email,
//           gender,
//           password: hash,
//           age,
//           city,
//           is_married,
//         };
//         const user = new UserModel(payload);
//         await user.save();
//         res.status(200).send({ message: "Registration successful" });
//       });
//     }
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

// // -- to sign in the user
// userRouter.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.findOne({ email: email });
//     console.log(user);
//     if (user) {
//       bcrypt.compare(password, user.password, (err, result) => {
//         if (result) {
//           res.status(200).send({
//             message: "Login successful",
//             token: jwt.sign({ userID: user._id }, "somesh"),
//           });
//         } else {
//           res.status(400).send({ message: "Invalid Password" });
//         }
//       });
//     } else {
//       res.status(400).send({ message: "Invalid Email" });
//     }
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

// module.exports = userRouter;


