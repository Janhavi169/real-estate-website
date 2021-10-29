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
      res.render("rent", { result: result });
      // console.log(result);
    }
  });
});

router.post("/", (req, res) => {
  mysqlConnection = connectionRequest();
  const type = req.body.type;
  const areafrom = req.body.from;
  const areato = req.body.to;
  const location = req.body.location;
  const lowerrange = req.body.lowerrange;
  const upperrange = req.body.upperrange;
  mysqlConnection.query(
    "SELECT * from properties where type=? AND area BETWEEN ? AND ? AND location=? AND price BETWEEN ? AND ?",[ type, areafrom, areato, location, lowerrange, upperrange ],
function(err, result)  {
      if (err) {
        console.log(err);
      } else {
        res.render("rent", { result: result });
        // console.log(result);
      }
    }
  );
});

module.exports = router;
