const express = require('express');
var router = express.Router();
// const connectionRequest = require("../config/database");
const ejs = require('ejs');
router.use(express.static("public"));

router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;