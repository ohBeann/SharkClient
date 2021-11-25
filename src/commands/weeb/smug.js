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
            permissionLevel: 0,
            description: 'Hug someone!',
            extendedHelp: 'No extended help available.',
            usage: '[Member]',
        });
    }

    async run(message) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.member.user.username}** is feeling smug`)
            .setImage(await (await neko.sfw.smug()).url)
            .setFooter('Powered by nekos.life')
        message.channel.send(embed)
    }
};