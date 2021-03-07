require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const path = require("path");
const logger = require("morgan");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(logger("dev"));

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(require("./public/api.js"));


app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});


const IP = process.env.IP || "127.0.0.1";
app.listen(PORT, IP, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is listening at: http://${IP}:${PORT}`);
  }
});