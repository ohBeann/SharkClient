const {
    Command
} = require('klasa');

module.exports = class extends Command {
    constructor(...args) {
        super(...args), {
            permissionLevel: 6,
            enabled: false,
            name: 'infoimage',
        }
    }
    async run(message) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription("Here is a list of assignable roles you can get using ?rank. \n \n Game Roles: \n \n <@&774410573684408340> \n <@&774410545004544082> \n <@&774410563274670100> \n <@&774410567003144192> \n \n Platforms: \n \n <@&774411686844825620> \n <@&774411673489506325> \n <@&774411690355851284> \n \n Misc Roles: \n \n <@&842780403126894623> \n \n More assignable roles will be added on request.")


        message.channel.send(embed)
    }
};