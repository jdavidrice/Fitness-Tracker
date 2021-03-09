require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const path = require("path");
const logger = require("morgan");
const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is listening on: http://localhost:${PORT}`);
});

