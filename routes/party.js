const express = require("express");
const router = express.Router();
const { Pool } = require("pg");
const { pgsql } = require("../db");

const pool = new Pool(pgsql);

router.get("/", function (req, res) {
  res.send("<h1>Hello Router</h1>");
});

router.get("/register", function (req, res) {
  res.render("party/register", {
    message: "",
    error: "",
  });
});

router.post("/submit", async function (req, res) {
  const query = `insert into party(name,short_name,main_candidate) values('${req.body.name}','${req.body.short_name}','${req.body.main_candidate}') `;
  try {
    const result = await pool.query(query);
    res.render("party/register", {
      message: "registered successfully",
      error: "",
    });
  } catch (error) {
    console.log(error);
    res.render("party/register", {
      message: "",
      error: "something went wrong",
    });
  }
});

router.get("/get-all", async function (req, res) {
  try {
    const query = "select * from party";
    const result = await pool.query(query);
    res.render("party/show-list", {
      parties: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.send("<h1>something went wrong</h1>");
  }
});

module.exports = router;
