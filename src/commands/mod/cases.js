const { Command } = require("klasa");
const Discord = require("discord.js")

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            requiredPermissions: ["USE_EXTERNAL_EMOJIS", "EMBED_LINKS"],
            permissionLevel: 3,
            runIn: ["text"],
            description: language => language.get("COMMAND_HISTORY_DESCRIPTION"),
            usage: "<user:user>"
        });
    }

    async run(msg, [user]) {
        const userlogs = msg.guild.settings.get("modlogs").filter(log => log.user === user.id);
        if (!userlogs) return msg.send(`${this.client.emotes.cross} ***No history for this user could be found in the mod logs.***`);
        const actions = {
            ban: 0,
            unban: 0,
            softban: 0,
            kick: 0,
            warn: 0,
            mute: 0,
            unmute: 0
        };

        for (const log of userlogs) actions[log.type]++;

        return msg.sendEmbed(new Discord.MessageEmbed()
            .setDescription([
                `❯ **User**: ${user.tag} (${user.id})`,
                `❯ **Ban**: ${actions.ban}`,
                `❯ **Unban**: ${actions.unban}`,
                `❯ **Mute**: ${actions.mute}`,
                `❯ **Unmute**: ${actions.unmute}`,
                `❯ **Warn**: ${actions.warn}`,
                `❯ **Kick**: ${actions.kick}`
            ].join("\n"))
            .setTimestamp()
            .setAuthor(`User History`, this.client.user.displayAvatarURL())
            .setColor("#52c6ff"));
    }

};