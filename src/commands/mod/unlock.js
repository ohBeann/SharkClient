const { Command } = require('klasa');

module.exports = class extends Command {




	constructor(...args) {
		super(...args, {
			enabled: true,
			runIn: ['text'],
			permissionLevel: 6,
            requiredPermissions: [
                "MANAGE_ROLES"
            ],
			description: 'Disables anti-raid features for Sharkland',
			extendedHelp: 'No extended help available.',
		});
	}

	async run(message, args) {
				// Will only work in Sharkland with the "MANAGE_GUILD" or "MANAGE_ROLES" permissions
		if (message.guild.id !== '584208881711054918') return message.reply('This guild is not elligble for the Lock command!')
		if (message.guild.settings.get('raidmode')) throw 'Anti-raid is already disabled.';

        const unlockRole = message.guild.roles.everyone;

        const perms = unlockRole.permissions.toArray();

        perms.push("SEND_MESSAGES");

        await unlockRole.edit({ permissions : perms })


        // logs it's perm list
		console.log(perms)
    
		await message.guild.settings.update('raidmode', false, message.guild);
		return message.send('Anti-raid mode disabled.');
	}

};