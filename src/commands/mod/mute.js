const {
	Command,
	Duration
} = require('klasa');
const Discord = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			permissionLevel: 5,
			requiredPermissions: ['MANAGE_ROLES'],
			runIn: ['text'],
			description: 'Mutes a mentioned member.',
			usage: '[when:time] <member:member> [reason:...string]',
			usageDelim: ' '
		});
	}

	async run(msg, [when, member, reason]) {
		if (member.id === msg.author.id) throw 'Why would you mute yourself?';
		if (member.id === this.client.user.id) throw 'Have I done something wrong?';

		const mutedRole = await msg.guild.settings.roles.muted
		if (!mutedRole) return msg.reply(`, You do not have a muted role set in the guild settings. Please issue the command \`${msg.guild.settings.prefix}conf set roles.muted <roleID or mention>\``)
		if (member.roles.highest.position >= msg.member.roles.highest.position || member.roles.cache.has(msg.guild.settings.get('roles.modrole'))) throw 'You cannot mute this user.';

		if (member.roles.cache.has(msg.guild.settings.roles.muted)) throw 'The member is already muted.';
		await member.roles.add(msg.guild.settings.roles.muted);
		const embed = new Discord.MessageEmbed()
		.setDescription(`You have been muted in ${msg.guild.name}${when ? ` for ${Duration.toNow(when)}` : ""}${reason ? ` with a reason of ${reason}` : ""}`)
		.setColor("RED")
		await member.send(embed)

		if (when) {
			await this.client.schedule.create('unmute', when, {
				data: {
					guild: msg.guild.id,
					user: member.id
				}
			});
			return msg.sendMessage(`${member.user.tag} got temporarily muted for ${Duration.toNow(when)}.${reason ? ` With reason of: ${reason}` : ''}`);
		}

		return msg.sendMessage(`${member.user.tag} got muted.${reason ? ` With reason of: ${reason}` : ''}`);
	}

};