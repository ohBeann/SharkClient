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
            description: 'meowwwwwww',
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.member.user.username}** meows`)
            .setImage(await (await neko.sfw.meow()).url)
            .setFooter('Powered by nekos.life')
        message.channel.send(embed)
    }
};