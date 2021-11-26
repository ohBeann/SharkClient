const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, {
            enabled: true,
            runIn: ['text'],
            permissionLevel: 6,
            description: 'Enables or disables NSFW on your guild',
            extendedHelp: 'No extended help available.',
            usage: '<enable|disable>',
            subcommands: true
        });
    }

    async enable(message) {
        if(message.guild.settings.get('nsfw', true)) return message.reply('NSFW is already enabled!') 
        message.guild.settings.update('nsfw', true)
        message.channel.send('NSFW enabled!')
    }

    async disable(message){
        if(!message.guild.settings.get('nsfw', true)) return message.reply('NSFW is already disabled!') 
        message.guild.settings.update('nsfw', false)
        message.channel.send('NSFW disabled!')
    }
};