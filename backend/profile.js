// // const express = require("express");
// // const router = express.Router();

// // router.post("/", (req, res) => {
// //   console.log(req.body);
// // });

// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const multer = require("multer");

// // Create a multer instance to handle file uploads
// const upload = multer();

// router.post("/", upload.single("files"), (req, res) => {
//   // Access the uploaded file through req.file
//   console.log(req.file);

//   // Additional processing logic here

//   res.status(200).json({ message: "File received successfully" });
// });

// module.exports = router;
