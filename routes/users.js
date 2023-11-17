var express = require('express');
var router = express.Router();

/* GET users listing. */
//URL:localhost3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
