const { Client, PermissionLevels } = require('klasa')

require('../schemas/defaultGuildSchema')
require('../schemas/defaultClientSchema')
require('../util/permissionLevels')

module.exports = class SharkClient extends Client {
    constructor(options){
        super({ ...options, PermissionLevels});
    }
}