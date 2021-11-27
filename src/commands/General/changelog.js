const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, {
            enabled: true,
            runIn: ['text', 'dm', 'group'],
            aliases: ["cl"],
            cooldown: 3,
            deletable: false,
            guarded: true,
            nsfw: false,
            permissionLevel: 0,
            description: 'Shows changlog',
            extendedHelp: 'No extended help available.',
        });
    }

    async run(message) {
        const changeLog = this.client.settings.get("changelog", message.guild)
        message.channel.send(changeLog)
    }

};
