const { Task } = require('klasa');

module.exports = class extends Task {

    constructor(...args) {
        super(...args, { enabled: true, name: "statusUpdate" });
    }

    async run() {
        this.client.user.setActivity(`over ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users | .help`, { type: 'WATCHING'})
    }
};
