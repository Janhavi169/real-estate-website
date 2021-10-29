const express = require("express");
var router = express.Router();
const connectionRequest = require("../config/database");
const ejs = require("ejs");
router.use(express.static("public"));
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  mysqlConnection = connectionRequest();
  mysqlConnection.query("SELECT * from properties", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("buy", { result: result });
      // console.log(result);
    }
  });
});


module.exports = router;
