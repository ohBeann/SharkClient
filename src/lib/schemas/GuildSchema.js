const { KlasaClient } = require("klasa");

KlasaClient.defaultGuildSchema
	.add('roles', folder => folder
		.add('muted', 'role'))
	.add('raidmode', 'Boolean', { default: false})
		