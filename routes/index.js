const express = require('express')
const router = express.Router()
const batteryLevel = require('battery-level')
const isCharging = require('is-charging')
const fs = require('fs')
const interfaces = require('interfaces')

/* GET home page. */
router.get('/', async (req, res, next) => {
    const batInfo = {
        level: await batteryLevel() * 100,
        charging: await isCharging()
    }
    let interfaces_object = await interfaces()
    const interfaces_array = []
    await Object.keys(interfaces_object).forEach(key => {
        interfaces_array.push({
            interface_name: key,
            data_row: interfaces_object[key]
        })
    })
    await res.render('index', {
        title: 'AP generated with Hostapd',
        batInfo: batInfo,
        interfaces: interfaces_array
    })
});

router.get('/leases', (req, res, next) => {
    let leases = fs.readFileSync('/var/lib/NetworkManager/dnsmasq-wlp2s0.leases', 'utf8').split('\n')
    leases = leases.map(each_data => {
        return {row: each_data}
    })
    res.render('leases', {
        title: 'Leases',
        leases: leases
    })
})

module.exports = router;
