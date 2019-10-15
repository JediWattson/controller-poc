var express = require('express');
var router = express.Router();

/* GET msg home page. */
router.get('/', function(req, res, next) {
  res.send({msg: 'here is data'})
});

module.exports = router;
