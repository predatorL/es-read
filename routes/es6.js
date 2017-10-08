var express = require('express');
var router = express.Router();


router.get('/:page', function (req, res, next) {
  const {
    page = 'index'
  } = req.params
  res.render(`es6/${page}`)
})


module.exports = router