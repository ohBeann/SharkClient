const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {

        super(...args, {
            enabled: true,
            once: false
        });
    }

    async run(...params) {
        this.client.user.setActivity(`over ${this.client.users.cache.size.toLocaleString()} users | .help`, { type: 'WATCHING'})
    }

    async init() {

    }

};

