var express = require('express');
var router = express.Router();
const Topicdata = require("../public/javascripts/Topicdata.json")
const Contactdata = require("../public/javascripts/Contactdata.json")

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.body)
});

module.exports = router;
