const {
    Command
} = require('klasa');

module.exports = class extends Command {
    constructor(...args) {
        super(...args), {
            permissionLevel: 6,
            enabled: false,
            name: 'infoembed',
        }
    }
    async run(message) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setImage("https://cdn.discordapp.com/attachments/906377989372129321/906378171774009374/RolesTemplate.png")

        message.channel.send(embed)
    }
};