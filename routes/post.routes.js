const express = require("express");
const calculateRoute = express.Router();

calculateRoute.post("/", (req, res) => {
  try {
    let { AIA, IR, TotalYr } = req.body;
    let i=IR/100
    let MaturityValue = AIA*[((1 + i) ** TotalYr - 1) / i];
    let TotalInvestAmount=AIA*TotalYr
    let TotalInterset=MaturityValue-TotalInvestAmount
    res.status(200).send({MaturityValue,TotalInvestAmount,TotalInterset})
  } catch (error) {
    res.send(error)
  }
});


module.exports = { calculateRoute };















// const express = require("express");
// const jwt = require("jsonwebtoken");
// const PostModel = require("../models/post.model");

// const postRouter = express.Router();

// // Create -- to post the data
// postRouter.post("/add", async (req, res) => {
//   const payload = req.body;
//   try {
//     const post = new PostModel(payload);
//     await post.save();
//     res.status(400).send({ message: "Post has been added" });
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

// // Read -- to see the post
// postRouter.get("/", async (req, res) => {
//   const token = req.headers.authorization;
//   const decoded = jwt.verify(token, "somesh");
//   const { limit, page, min, max, device, device1, device2, device3 } =
//     req.query;
//   const pageNumber = +page || 1;
//   const pageLimit = +limit || 3;
//   const pagination = pageNumber * pageLimit - pageLimit || 0;

//   const query = {};
//   if (min && max) {
//     query.no_of_comments = { $gte: min, $lte: max };
//   }
//   if (device) {
//     query.device = device;
//   }
//   if (device1) {
//     query.device1 = device1;
//   }
//   if (device2) {
//     query.device2 = device2;
//   }
//   if (device3) {
//     query.device3 = device3;
//   }
//   try {
//     if (decoded) {
//       const userID = decoded.userID;
//       if (userID) {
//         query.userID = userID;
//       }
//       const posts = await PostModel.find(query)
//         .skip(pagination)
//         .limit(pageLimit);
//       res.status(200).send(posts);
//     }
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

// // Read -- to see the top comments
// postRouter.get("/top", async (req, res) => {
//   const token = req.headers.authorization;
//   const decoded = jwt.verify(token, "somesh");
//   const { limit, page } = req.query;
//   const pageNumber = +page || 1;
//   const pageLimit = +limit || 3;
//   const pagination = pageNumber * pageLimit - pageLimit || 0;
//   try {
//     if (decoded) {
//       const userID = decoded.userID;
//       const posts = await PostModel.find({ userID: userID })
//         .sort({
//           no_of_comments: 1,
//         })
//         .skip(pagination)
//         .limit(pageLimit);
//       res.status(200).send(posts);
//     }
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

// // Update -- to udpate the post
// postRouter.patch("/update/:postID", async (req, res) => {
//   const token = req.headers.authorization;
//   const decoded = jwt.verify(token, "somesh");
//   const userID = decoded.userID;
//   const { postID } = req.params;
//   const payload = req.body;
//   try {
//     const post = await PostModel.findOne({ _id: postID });
//     if (userID === post.userID) {
//       await PostModel.findByIdAndUpdate({ _id: postID }, payload);
//       res.status(200).send({ message: "Post has been update" });
//     } else {
//       res.status(400).send({ message: "Not authorized" });
//     }
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

// // Delete  -- to delete the post
// postRouter.delete("/delete/:postID", async (req, res) => {
//   const token = req.headers.authorization;
//   const decoded = jwt.verify(token, "somesh");
//   const userID = decoded.userID;
//   const { postID } = req.params;
//   try {
//     const post = await PostModel.findOne({ _id: postID });
//     if (userID === post.userID) {
//       await PostModel.findByIdAndDelete({ _id: postID });
//       res.status(200).send({ message: "Post has been deleted" });
//     } else {
//       res.status(400).send({ message: "Not authorized" });
//     }
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

// module.exports = postRouter;
