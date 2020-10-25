const express = require('express')
const router = express.Router()
const df = require('df')

router.get('/', (req, res, next) => {
    df(async (e, table) => {
        if (e) {
            next(e)
        } else {
            console.log(table)
            res.render('df', {
                title: 'DF Information',
                table: table
            })
        }
    })
})

module.exports = router;
