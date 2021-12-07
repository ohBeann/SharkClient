const { Command } = require("klasa");
const { EMOTES: {check, cross, no}} = require("../../../lib/util/constants")

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            runIn: ["text"],
            cooldown: 10,
            aliases: ["setloggingchannel", "setlogchannel"],
            permissionLevel: 5,
            requiredPermissions: ["USE_EXTERNAL_EMOJIS"],
            usage: "[Channel:channel]",
            description: "Sets the channel to log in.",
            extendedHelp: "No extended help available."
        });
    }

    async run(msg, [Channel = msg.channel]) {
        return msg.guild.settings.update("channels.logs", Channel.id).then(() => {
            msg.sendMessage(`${check}  ::  Logging channel set!`);
        });
    }

};