const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			enabled: true,
			runIn: ['text'],
			permissionLevel: 6,
			description: 'Enables anti-raid features for Sharkland',
			extendedHelp: 'No extended help available.',
			usage: '[off]',
			subcommands: true
		});
	}

	async run(message, args) {
		if (message.guild.settings.get('raidmode')) throw 'Anti-raid is already enabled.';

        const lockRole = message.guild.roles.everyone;

        const perms = lockRole.permissions.toArray();

        const newPerms = perms.filter((perm) => perm !== 'SEND_MESSAGES');

        await lockRole.edit({ permissions : newPerms })

		await message.guild.settings.update('raidmode', true, message.guild);
		return message.send('🛡  ::  Anti-raid mode enabled.');
	}
	async off(message){
		if (!message.guild.settings.get('raidmode', true)) throw 'Anti-raid is already disabled.';

        const unlockRole = message.guild.roles.everyone;

        const perms = unlockRole.permissions.toArray();

        perms.push("SEND_MESSAGES");

        await unlockRole.edit({ permissions : perms })
    
		await message.guild.settings.reset('raidmode', message.guild);
		return message.send('Anti-raid mode disabled.');
	}

};