const { Task } = require('klasa');

module.exports = class extends Task {

    constructor(...args) {
        super(...args, { enabled: true, name: "statusUpdate" });
    }

    async run() {
        this.client.user.setActivity(`over ${this.client.users.cache.size.toLocaleString()} users | .help`, { type: 'WATCHING'})
    }
};
