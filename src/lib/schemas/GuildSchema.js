const { Client } = require('klasa');

Client.defaultGuildSchema
	.add('raidmode', 'boolean', { default: false })