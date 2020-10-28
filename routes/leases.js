const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res, next) => {
    let leases = fs.readFileSync('/var/lib/NetworkManager/dnsmasq-wlp2s0.leases', 'utf8').split('\n')
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
