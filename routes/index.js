const express = require('express')
const router = express.Router()
const batteryLevel = require('battery-level')
const isCharging = require('is-charging')
const fs = require('fs')

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

router.get('/leases', (req, res, next) => {
    const data = fs.readFileSync('/var/lib/NetworkManager/dnsmasq-wlp2s0.leases', 'utf8')
    res.render('leases', {
        title: 'Leases',
        leases: data.replace(/\n/gi, '<br>')
    })
})

module.exports = router;
