var express = require('express');
var router = express.Router();
const Topicdata = require("../public/javascripts/Topicdata.json")
const Contactdata = require("../public/javascripts/Contactdata.json")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(Contactdata)
});

module.exports = router;
