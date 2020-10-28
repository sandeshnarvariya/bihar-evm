const express = require("express");
const path = require("path");

const partyRouter = require("./routes/party");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

console.log(path.join(__dirname, "views"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routes
app.use("/party", partyRouter);

app.listen(4000, () => {
  console.log(`app is listening to port 4000`);
});

///
/// 1. GET
/// 2. POST
/// 3. PUT
/// 4. DELETE
