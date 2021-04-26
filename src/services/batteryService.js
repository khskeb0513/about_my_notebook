const battery = require('battery-level')
const chargingStatus = require('is-charging')

const BatteryService = {
    batteryStatus: async () => {
        return {
            level: await battery() * 100,
            charging: await chargingStatus()
        }
    }
}

module.exports = BatteryService
