const router = require('express').Router()

router.get('/', function(req, res, next) {
    res.send({
        state: 111
    })
})

module.exports = router
