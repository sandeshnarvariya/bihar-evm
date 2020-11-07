const express = require("express");
const { Pool } = require("pg");
const { pgsql } = require("../db");

const pool = new Pool(pgsql);

const router = express.Router();

router.get("/", function (req, res) {
  res.send("<h1>Hello Router</h1>");
});

router.get("/create", async function (req, res) {
  // pool
  //   .query(query)
  //   .then((result) => console.log(result.rows))
  //   .catch((err) => console.log(err));

  try {
    const query = "select * from student";
    const result = await pool.query(query);
    res.json({ ok: true, students: result.rows });
  } catch (error) {
    res.json({ ok: false, message: "something went wrong" });
    console.log(error);
  }
});

router.get("/register", function (req, res) {
  res.send("<h1>Hello Register</h1>");
});

router.get("/demo", function (req, res) {
  res.render("voter/demo");
});

module.exports = router;




// voter  --> CURD
// {
//   id : 1,
//   name : "",
//   gender : "",
//   age : "",
//   address : "",
//   mobileNumber : "",
//   fatherOrHusbandName:"",
//   dob:"",
//   photo : ""
// } 