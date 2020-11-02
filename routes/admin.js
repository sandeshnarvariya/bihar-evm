const express = require("express");
const router = express.Router();

router.get("/login", function (req, res) {
  res.send("<h1>Hello Router</h1>");
});

module.exports = router;
