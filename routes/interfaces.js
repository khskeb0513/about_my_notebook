const express = require('express')
const router = express.Router()
const interfaces = require('interfaces')

router.get('/', async (req, res, next) => {
    let interfaces_object = await interfaces()
    const interfaces_array = []
    await Object.keys(interfaces_object).forEach(key => {
        interfaces_array.push({
            interface_name: key,
            data_row: interfaces_object[key]
        })
    })
    await res.render('interfaces', {
        title: 'Interfaces Information',
        interfaces: interfaces_array
    })
});

module.exports = router;
