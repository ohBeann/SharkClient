const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            enabled: true,
            runIn: ['text', 'dm', 'group'],
            permissionLevel: 0,
            description: 'Vote for the bot on TopGG, I\'d greatly appreciate it.',
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        message.channel.send('Vote for me here! https://top.gg/bot/769661759006703625/vote')
    }

    async init() {
    }

};
