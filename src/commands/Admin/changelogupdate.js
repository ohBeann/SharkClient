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
            aliases: ["clu"],
            permissionLevel: 10,
            description: 'Updates the changelog of the bot',
            extendedHelp: 'No extended help available.',
            usage: '<Message:string>',
        });
    }

    async run(message, [string]) {
      await this.client.settings.update('changelog', string)
      return message.channel.send(`Changelog updated to ${string}`)
    }
};
