require("dotenv").config();
const express = require("express");
const mongojs = require("mongojs");
const helmet = require("helmet");
const path = require("path");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(helmet());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const databasuUrl = "fitness";
const collections = ["fitnessdata"];

const db = mongojs(databasuUrl, collections);

db.on("error", error => {
    console.log("Database error:", error);
});

app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
});

// Additional routes go here

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || "127.0.0.1";
app.listen(PORT, IP, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is listening at: http://${IP}:${PORT}`);
    }
});