// Dependencies
const path = require("path");

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
  );

  app.get("/exercise", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  );

  app.get("/stats", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  );

  app.get("/authors", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/author-manager.html"))
  );
};