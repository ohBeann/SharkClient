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
            deletable: false,
            nsfw: true,
            permissionLevel: 0,
            description: 'Hug someone!',
            extendedHelp: 'No extended help available.',
            usage: '[Member]',
        });
    }

    async run(message) {
        if(message.guild.settings.nsfw == false) throw `Guild does not have NSFW enabled!`
        const embed = new Discord.MessageEmbed()
            .setImage(await (await neko.nsfw.nekoGif()).url)
            .setFooter('Powered by nekos.life')
        message.channel.send(embed)
    }
};