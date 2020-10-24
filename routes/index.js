const express = require('express');
const router = express.Router();
const batteryLevel = require('battery-level')
const isCharging = require('is-charging')

/* GET home page. */
router.get('/', async (req, res, next) => {
    const batInfo = {
        level: await batteryLevel() * 100,
        charging: await isCharging()
    }
    await res.render('index', {
        title: 'Battery Info',
        batInfo: batInfo
    })
});

module.exports = router;
