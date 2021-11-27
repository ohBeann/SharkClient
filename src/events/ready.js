const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            enabled: true,
            once: false
        });
    }

    async run(message) {
        
    }
    async init(){
        this.client.user.setActivity(`over ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users | .help`, { type: 'WATCHING'})
    }

    }
