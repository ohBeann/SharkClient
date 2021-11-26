const { KlasaClient } = require("klasa");

KlasaClient.defaultGuildSchema
	.add('roles', folder => folder
		.add('muted', 'role')
		.add('modrole', 'role'))
	.add('raidmode', 'Boolean', { default: false})
	.add('channels', folder => folder
		.add('suggestionChannel', 'channel', { default: false }))
		.add('nsfw', 'Boolean', { default: false})
		