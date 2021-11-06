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
            .setImage("https://cdn.discordapp.com/attachments/906377210120777768/906377904823345172/InfoTemplate.png")


        message.channel.send(embed)
    }
};