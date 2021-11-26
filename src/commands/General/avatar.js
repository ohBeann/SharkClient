const {
    Command
} = require('klasa');
const Discord = require('discord.js')

module.exports = class extends Command {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, {
            enabled: true,
            runIn: ['text'],
            aliases: ['av'],
            deletable: false,
            permissionLevel: 0,
            description: 'Get\'s the avatar of you or a person you mention',
            extendedHelp: 'No extended help available.',
            usage: '[Member:mention]',
        });
    }

    async run(message) {
        const _user = message.mentions.users.first() || message.author
        const embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setAuthor(_user.tag, _user.displayAvatarURL())
            .setDescription("**Avatar**")
            .setImage(_user.avatarURL({
                size: 1024,
                dynamic: true
            }))
        message.channel.send(embed)
    }

};