const express = require("express");
const { Pool } = require("pg");
const { pgsql } = require("../db");

const router = express.Router();

const pool = new Pool(pgsql);

// define the home page route  // index route
router.get("/", function (req, res) {
  res.send("<h1>Party Home Page</h1>");
});

router.get("/all-students", async function (req, res) {
  const query = "select * from student";
  //   pool
  //     .query(query)
  //     .then((result) => {
  //       console.log(result.rows);
  //       res.end();
  //     })
  //     .catch((err) => {
  //       res.end();
  //       console.log(err);
  //     });

  try {
    const result = await pool.query(query);
    console.log(result.rows);
    res.end();
  } catch (error) {
    console.log(error);
    res.end();
  }
});

/// API to get all students data
router.get("/api/students/all", async function (req, res) {
  try {
    const query = "select * from student";
    const result = await pool.query(query);
    res.status(200).json({ ok: true, data: result.rows });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "internal server error" });
  }
});

/// API to create student
router.post("/api/students/create", async (req, res) => {
  try {
    const query = "insert into student(name) values('sakshi') returning * ";
    const result = await pool.query(query);
    res.status(201).json({ ok: true, student: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "internal server error" });
  }
});

router.get("/create-request", function (req, res) {
  res.render("party/create");
});

router.post("/create", function (req, res) {
  res.send("hello post create");
});

router.get("/all", function (req, res) {
  res.send("<h1>ALL Party List</h1>");
});

router.get("/get-by-id/:id", function (req, res) {
  res.end("<h1>Party By id</h1>");
});

router.put("/update-by-id", function (req, res) {
  res.end();
});

router.delete("/delete-by-id/:id", function (req, res) {
  res.end();
});

module.exports = router;

/// raw sql
/// sequelize , TypeORM

// student.findAll()
// student.create()

// HTML FORM
// input tag , select tag , radio , button
