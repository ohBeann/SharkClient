const {
    Command,
    Duration
} = require('klasa');
const {
    EMOTES
} = require("../../lib/util/constants")

module.exports = class extends Command {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, {
            enabled: true,
            runIn: ['text'],
            requiredPermissions: ["BAN_MEMBERS"],
            permissionLevel: 5,
            description: 'Bans a member',
            extendedHelp: '`--duration<1-30d>` for temp ban duration \n`--messages=<1-7>` for days of messages to delete',
            usage: '<user:user> [reason:string] [...]',
            usageDelim: " ",
            quotedStringSupport: false,
        });
    }

    async run(msg, [user, ...reason]) {
        reason = reason ? reason.join(" ") : null;

        if (user.id === msg.author.id) return msg.reply(`${EMOTES.cross} **You cannot ban yourself!***`);
        if (user.id === this.client.user.id) return msg.reply(`${EMOTES.cross} ***You cannot ban me!***`);

        let target = await msg.guild.members.fetch(user.id).catch(() => null);

        if (target) {
            if (target.roles.highest.position >= msg.member.roles.highest.position) return msg.reply(`${EMOTES.cross} ***Target member is higher in role hierarchy than you.***`);
            else if (!target.bannable) return msg.reply(`${EMOTES.cross} ***This target is not bannable!***`);
        } else {
            target = user;
        }

        let msgDays = msg.flagArgs.messages || msg.flagArgs.msg;
        msgDays = Number(msgDays);
        const banDays = msg.flagArgs.duration || msg.flagArgs.tempban || msg.flagArgs.time || null;
        let duration;
        banDays ? duration = Date.now(banDays) : null;

        if (msgDays && (!typeof msgDays === Number || msgDays < 1 || msgDays >= 8)) throw `${EMOTES.cross} ***Invalid days of messages to be deleted, 1-7 only.***`;
        if (banDays && (duration.offset < 1 || duration.offset > 2592000000)) throw `${EMOTES.cross} ***Invalid temporary ban days, maximum 30 days only.***`;
        
        if (banDays) await this.client.schedule.create("timedBan", duration, {
            data: {
                guildID: msg.guild.id,
                userID: user.id
            },
            catchUp: true
        });
        await msg.guild.members.ban(target, {
            reason: reason ? reason : `No Reason Specified - ${msg.author.tag}`,
            days: msgDays
        });



        return msg.sendMessage(`${EMOTES.check} ***${user.tag ? user.tag : user.user.tag} has been banned!${duration > 0 ? ` Temp Ban for: ${banDays}` : ""}***`);
    }
};