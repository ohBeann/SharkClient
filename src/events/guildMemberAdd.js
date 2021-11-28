const {
    Event
} = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            enabled: true,
        });
    }

    async run(member) {
        if(!member.guild.settings.get('toggles.autorole', false)) return null;
        if (!member.guild.settings.get('roles.autorole')) return null;
        const role = member.guild.settings.get("roles.autorole")
        await member.roles.add(role)
        }
    }