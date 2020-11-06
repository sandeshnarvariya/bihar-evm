const express = require("express");
const { Pool } = require("pg");
const multer = require("multer");

const router = express.Router();
const { pgsql } = require("../db");

const pool = new Pool(pgsql);

router.get("/login", function (req, res) {
  res.render("admin/login", {
    error: "",
  });
});

router.post("/login-submit", async (req, res) => {
  const query = `select * from admin where email = '${req.body.email}' and password = '${req.body.password}' `;
  try {
    const results = await pool.query(query);
    if (results.rows.length > 0) {
      req.session.isAdminLoggedIn = true;
      res.redirect("/party/get-all");
    } else {
      res.render("admin/login", {
        error: "Invalid email/password",
      });
    }
  } catch (error) {
    console.log(error);
    res.render("admin/login", {
      error: "something went wrong",
    });
  }
});

router.get("/logout", async function (req, res) {
  try {
    await req.session.destroy();
    res.redirect("/admin/login");
  } catch (error) {
    console.log(error);
    res.redirect("/admin/login");
  }
});

module.exports = router;
