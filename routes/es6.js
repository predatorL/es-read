var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('es6/index')
})
router.get('/:page', function (req, res, next) {
  const {
    page = 'index'
  } = req.params
  res.render(`es6/${page}`)
})


module.exports = router