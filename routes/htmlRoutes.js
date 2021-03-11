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