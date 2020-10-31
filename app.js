const express = require("express");
const path = require("path");

const PartyRouter = require("./routes/party");
const VoterRouter = require("./routes/voter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/party", PartyRouter);
app.use("/voter", VoterRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log(`app is listening to port 4000`);
});
