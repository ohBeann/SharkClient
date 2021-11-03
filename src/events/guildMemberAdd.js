const {
    Event
} = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            enabled: false,
        });
    }

   async run(member) {
        if(member.guild.id !== '584208881711054918') return;
        await member.roles.add('893607222322548747')
    }
};