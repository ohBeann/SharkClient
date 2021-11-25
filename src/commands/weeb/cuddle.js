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
            description: 'Cuddle someone!',
            extendedHelp: 'No extended help available.',
            usage: '[Member]',
        });
    }

    async run(message) {
        const personCuddled = message.mentions.users.first()
        if (!personCuddled) return  message.channel.send(new Discord.MessageEmbed()
            .setColor("BLACK")
            .setImage(await (await (await neko.sfw.cuddle()).url))
            .setFooter('Powered by nekos.life'))
            const embed = new Discord.MessageEmbed()
                .setColor("BLACK")
                .setImage(await (await neko.sfw.cuddle()).url)
                .setDescription(`**${message.member.user.username}** cuddles **${personCuddled.username}**`)
                .setFooter('Powered by nekos.life')


            message.channel.send(embed)
        
    }
};