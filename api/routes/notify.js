var rp = require('request-promise');
var express = require('express');
var router = express.Router();

/* Send notification */
router.post('/', function(req, res, next) {
  const data = req.body
  rp({
    url: 'http://localhost:5000/',
    method: 'POST',
    headers : { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  res.send({msg: "message sent!"})
});

module.exports = router;
