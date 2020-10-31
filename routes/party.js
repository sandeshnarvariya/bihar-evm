const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("<h1>Hello Router</h1>");
});

router.get("/create", function (req, res) {
  res.send("<h1>Hello Reata</h1>");
});

module.exports = router;
