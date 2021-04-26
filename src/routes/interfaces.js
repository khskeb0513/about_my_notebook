const express = require('express')
const InterfaceService = require("../services/interfaceService");
const router = express.Router()


router.get('/', async (req, res, next) => {
    const interfaces = await InterfaceService.interfaces()
    await res.render('interfaces', {
        title: 'Interfaces Information', interfaces
    })
});

module.exports = router;
