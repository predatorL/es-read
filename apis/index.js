var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

// generator
router.get('/generator', function(req, res, next) {
  setTimeout(_ => {
    res.send('generator');
  }, 200)
});

module.exports = router;
