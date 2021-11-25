const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {

        super(...args, {
            enabled: true,
        });
    }

    async run(...params) {
        this.client.user.setActivity(`over ${this.client.users.cache.size.toLocaleString()} users | .HELP`, { type: 'WATCHING'})
    }

    async init() {

    }

};
