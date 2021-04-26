const express = require('express')
const router = express.Router()
const dfService = require('../services/dfService')

router.get('/', (req, res, next) => {
    dfService.table.then(table => {
        res.render('df', {
            title: 'DF Information', table
        })
    }).catch(e => next(e))
})

module.exports = router;
