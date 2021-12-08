const {
    Event
} = require('klasa');
const ServerLog = require('../lib/structures/ServerLog');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            event: "guildBanRemove"
        }, {
            enabled: true,
        });
    }

    async run(guild, user, client) {
        if (guild.settings.get("toggles.serverlogs")) {
            await new ServerLog(guild)
                .setColor("yellow")
                .setType("moderation")
                .setName("Member Unbanned")
                .setMessage(`🔨  ::  ${user} (${user.id}) has been **unbanned**`)
                .send();
        }
    };
}