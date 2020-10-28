const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res, next) => {
    // let leases = fs.readFileSync('/var/lib/NetworkManager/dnsmasq-wlp2s0.leases', 'utf8').split('\n')
    let leases = '1603846102 8c:a9:82:15:3f:e0 10.42.0.92 samentos 01:8c:a9:82:15:3f:e0\n' +
        '1603845613 40:ec:99:ab:36:5f 10.42.0.195 DESKTOP-9NQHPMF 01:40:ec:99:ab:36:5f\n' +
        '1603846120 f8:e6:1a:10:98:08 10.42.0.156 Galaxy-S7 01:f8:e6:1a:10:98:08'
    leases = leases.split('\n')
    leases = leases.map(each_data => {
        each_data = each_data.split(' ')
        return {
            timestamp: each_data[0],
            macAddr: each_data[1],
            ipAddr: each_data[2],
            hostname: each_data[3],
            clientId: each_data[4]
        }
    })
    res.render('leases', {
        title: 'DHCP DNSMASQ Information',
        leases: leases
    })
})

module.exports = router;
