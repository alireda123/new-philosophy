var express = require('express');
var router = express.Router();
const Topicdata = require("../public/javascripts/Topicdata.json")
const Contactdata = require("../public/javascripts/Contactdata.json")

router.get("/", (req, res) => {
    res.send(Topicdata)
})

module.exports = router;