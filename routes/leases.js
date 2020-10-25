const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', (req, res, next) => {
    let leases = fs.readFileSync('/var/lib/NetworkManager/dnsmasq-wlp2s0.leases', 'utf8').split('\n')
    leases = leases.map(each_data => {
        return {row: each_data}
    })
    res.render('leases', {
        title: 'DHCP DNSMASQ Information',
        leases: leases
    })
})

module.exports = router;
