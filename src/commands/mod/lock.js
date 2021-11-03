const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			enabled: true,
			runIn: ['text'],
			permissionLevel: 6,
			description: 'Enables anti-raid features for Sharkland',
			extendedHelp: 'No extended help available.',
		});
	}

	async run(message, args) {
							// Will only work in Sharkland with the Perms role / "MANAGE_GUILD" permision
		if (message.guild.id !== '584208881711054918') return message.reply('This guild is not elligble for the Lock command!')
		if (message.guild.settings.get('raidmode')) throw 'Anti-raid is already enabled.';

        const lockRole = message.guild.roles.everyone;

        const perms = lockRole.permissions.toArray();

        const newPerms = perms.filter((perm) => perm !== 'SEND_MESSAGES');

        await lockRole.edit({ permissions : newPerms })

		console.log(newPerms)

		await message.guild.settings.update('raidmode', true, message.guild);
		return message.send('🛡  ::  Anti-raid mode enabled.');
	}

};