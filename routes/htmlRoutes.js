// // Dependencies
// const path = require("path");

// // Routes
// module.exports = (app) => {
//   // Each of the below routes just handles the HTML page that the user gets sent to.


//   app.get("/", (req, res) =>
//     res.sendFile(path.join(__dirname, "../public/index.html"))
//   );

//   app.get("/exercise", (req, res) =>
//     res.sendFile(path.join(__dirname, "../public/exercise.html"))
//   );

//   app.get("/stats", (req, res) =>
//     res.sendFile(path.join(__dirname, "../public/stats.html"))
//   );

// };

const path = require("path");

module.exports = function (app) {
  app.get("/:action", (req, res) => {
    let action = req.params.action;
    if (action) {
      switch (action) {
      case "/":
        res.sendFile(path.join(__dirname, "../public/index.html"));
        break;

      case "exercise":
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
        break;

      case "stats":
        res.sendFile(path.join(__dirname, "../public/stats.html"));
        break;

      default:
        res.sendFile(path.join(__dirname, "../public/index.html"));
        break;
      }
    }
  });
};