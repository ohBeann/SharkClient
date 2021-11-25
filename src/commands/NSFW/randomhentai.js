const {
    Command
} = require('klasa');
const Discord = require('discord.js')
const _Client = require('nekos.life')
const neko = new _Client;

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            enabled: true,
            runIn: ['text', 'dm', 'group'],
            nsfw: true,
            deletable: false,
            permissionLevel: 0,
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        if(message.guild.settings.nsfw == false) throw `Guild does not have NSFW enabled!`
        const embed = new Discord.MessageEmbed()
            .setImage(await (await neko.nsfw.randomHentaiGif()).url)
            .setFooter('Powered by nekos.life')
        message.channel.send(embed)
    }
};