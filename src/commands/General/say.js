const { Util } = require('discord.js');
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            enabled: true,
            description: 'Says what you tell it to',
            extendedHelp: 'No extended help available.',
            usage: '<say:string>',
        });
    }

    async run(message) {
        const argument = message.args.join(' ')
        const say = Util.removeMentions(argument)
        message.delete()
        message.channel.send(say)
    }

};
