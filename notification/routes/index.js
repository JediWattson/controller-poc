const {MESSAGE, USER} = require('shared/constants')
var rp = require('request-promise');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  const data = req.body
  data.msg = MESSAGE
  if(data.user === USER)
    rp({
      url: 'http://localhost:8080',
      method: 'POST',
      headers : { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
  res.send({msg: 'notification is sent'})
});

module.exports = router;
