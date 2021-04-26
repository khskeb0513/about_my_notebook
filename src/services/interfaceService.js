const interfaces = require("interfaces");
const InterfaceService = {
    interfaces: async () => {
        let interfaces_object = await interfaces()
        const interfaces_array = []
        await Object.keys(interfaces_object).forEach(key => {
            interfaces_array.push({
                interface_name: key,
                data_row: interfaces_object[key]
            })
        })
        return interfaces_array
    }
}

module.exports = InterfaceService
