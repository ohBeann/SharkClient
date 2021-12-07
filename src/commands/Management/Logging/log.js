const { Command } = require("klasa");
const { EMOTES: {check, cross, no}} = require("../../../lib/util/constants")

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            runIn: ["text"],
            cooldown: 3,
            aliases: ["enablelog", "disablelog", "togglelog"],
            permissionLevel: 5,
            requiredPermissions: ["USE_EXTERNAL_EMOJIS"],
            description: language => language.get("COMMAND_LOG_DESCRPTION"),
            usage: "[Option:string]",
            extendedHelp: "No extended help available."
        });
    }

    async run(msg, [Option]) {
        if (!Option) return msg.reply(`${msg.language.get("CMD_LOG_INVALID")}  \`moderation\`, \`messages\`.`);
        const opt = Option.toLowerCase();
        switch (opt) {
            // case "automod": await this.update("automod", msg);
            //     break;
            case "moderation": await this.update("moderation", msg);
                break;
            // case "channels": await this.update("channels", msg);
            //     break;
            // case "join": await this.update("join", msg);
            //     break;
            // case "leave": await this.update("leave", msg);
            //     break;
            case "messages": await this.update("messages", msg);
            //     break;
            // case "roles": await this.update("roles", msg);
            //     break;
            default: msg.reply(`${msg.language.get("CMD_LOG_INVALID")} \`moderation\`, \`messages\`.`);
        }
    }

    async update(key, msg) {
        const serverlogs = msg.guild.settings.get("serverlogs");
        if (serverlogs[key]) {
            const { errors } = await msg.guild.settings.update(`serverlogs.${key}`, false).catch(e => e);
            return msg.sendMessage(`${cross}  ::  ***\`${key}\` ${msg.language.get("CMD_LOG_DISABLED")}***`);
        } else {
            const { errors } = await msg.guild.settings.update(`serverlogs.${key}`, true).catch(e => e);
            return msg.sendMessage(`${check}  ::  ***\`${key}\` ${msg.language.get("CMD_LOG_ENABLED")}***`);
        }
    }

};