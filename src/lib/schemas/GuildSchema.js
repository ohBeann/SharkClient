const { KlasaClient } = require("klasa");

KlasaClient.defaultGuildSchema
	.add('roles', folder => folder
		.add('muted', 'role', { default: null})
		.add('modrole', 'role', { default: null})
		.add('autorole', 'role', { default: null}))
	.add('raidmode', 'Boolean', { default: false})
	.add('channels', folder => folder
		.add('suggestionChannel', 'channel', { default: false }))
		.add('nsfw', 'Boolean', { default: false})
	.add('toggles', folder => folder
		.add('autorole', 'Boolean', { default: false}))
		