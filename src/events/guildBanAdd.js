const { Event } = require("klasa");
const ServerLog = require("../lib/structures/ServerLog");

module.exports = class extends Event {

    constructor(...args) {
        super(...args, { event: "guildBanAdd"}, {
            enabled: true,
        });
    }
    async run(guild, user) {
        if(guild.settings.get("toggles.serverlogs")){
        await new ServerLog(guild)
            .setColor("red")
            .setType("moderation")
            .setName("Member Banned")
            .setMessage(`🔨  ::  ${user} (${user.id}) has been **banned**.`)
            .send();
    }}

};