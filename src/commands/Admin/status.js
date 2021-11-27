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
        const entry = this.client.schedule.tasks.some(task => task.taskName === 'statusUpdate');
        if(entry) return message.channel.send('Already scheduled');
        await this.client.schedule.create('statusUpdate', '/30 * * * *')
        message.channel.send("Success")
    }
};