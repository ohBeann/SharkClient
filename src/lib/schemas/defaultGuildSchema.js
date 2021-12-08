const { KlasaClient } = require("klasa");

KlasaClient.defaultGuildSchema

	// Customs
	.add('customs', 'any', { default: [], array: true })

	// Roles
	.add('roles', folder => folder
		.add('muted', 'role', { default: null})
		.add('modrole', 'role', { default: null})
		.add('autorole', 'role', { default: null}))

	// Raidmode
	.add('raidmode', 'Boolean', { default: false})

	// Channels
	.add('channels', folder => folder
		.add('suggestionChannel', "textchannel", { default: null })
		.add('logs', "textchannel")
		.add('modlogs', "textchannel"))

	// NSFW
	.add('nsfw', 'Boolean', { default: false})

	// Modlogs
	.add("modlogs", "any", { array: true, configurable: false })

	// Server Logs
	.add('serverlogs', folder => folder
		.add("messages", "boolean", { default: false })
		.add("moderation", "boolean", { default: false})
		.add("join", "boolean", { default: false})
		.add("leave", "boolean", { default: false})
		.add("channels", "boolean", { default: false})
		.add("automod", "boolean", { default: false })
		.add("roles", "boolean", { default: false}))

	// Toggles
	.add('toggles', folder => folder
		.add('autorole', 'Boolean', { default: false})
		.add('logging', 'boolean', { default: true})
		.add('modlogs', 'boolean', { default: false}))