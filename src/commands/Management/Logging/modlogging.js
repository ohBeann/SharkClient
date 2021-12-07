const { Command } = require("klasa");
const { EMOTES: {check, cross, no}} = require("../../../lib/util/constants")

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            runIn: ["text"],
            cooldown: 10,
            aliases: ["modlog", "managemodlogs"],
            permissionLevel: 5,
            requiredPermissions: ["USE_EXTERNAL_EMOJIS"],
            usage: "<channel|toggle> [Channel:channel]",
            usageDelim: " ",
            description: "Manages modlogging",
            extendedHelp: "No extended help available.",
            subcommands: true
        });
    }

    async channel(msg, [Channel = msg.channel]) {
        const { errors } = await msg.guild.settings.update("channels.modlogs", Channel.id);
        return msg.sendMessage(`${check}  ::  Logging channel has been set!`);
    }

    async toggle(msg) {
        const { errors } = await msg.guild.settings.update("toggles.modlogs", !msg.guild.settings.get("toggles.modlogs"));
        return msg.reply(`${check} ***Mod logs have been ${msg.guild.settings.get("toggles.modlogs") ? "Enabled" : "Disabled"}.***`);
    }

};