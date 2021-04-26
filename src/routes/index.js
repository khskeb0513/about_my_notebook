const express = require('express')
const router = express.Router()
const batteryService = require('../services/batteryService')

router.get('/', async (req, res, next) => {
    const batInfo = await batteryService.batteryStatus()
    await res.render('index', {
        title: 'Information Page',
        batInfo
    })
});

module.exports = router;
