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
		.add('suggestionChannel', 'channel', { default: false }))

	// NSFW
	.add('nsfw', 'Boolean', { default: false})


	// Toggles
	.add('toggles', folder => folder
		.add('autorole', 'Boolean', { default: false}))