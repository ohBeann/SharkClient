const {
    Command
} = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, {
            enabled: true,
            permissionLevel: 10,
            description: 'Updates status of bot',
        });
    }

    async run(message) {
        await this.client.schedule.create('statusUpdate', '* * * * *')
        message.channel.send("Success")
    }
};