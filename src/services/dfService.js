const df = require("df");
const DFService = {
    table: new Promise((resolve, reject) => {
        df(async (e, table) => {
            if (e) {
                reject(e)
            } else {
                resolve(table)
            }
        })
    })
}

module.exports = DFService
