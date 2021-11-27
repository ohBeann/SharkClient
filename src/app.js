const { Client } = require('klasa');
const { token } = require ('./config.json')
require('dotenv').config();

require('./lib/schemas/GuildSchema')
require('./lib/schemas/ClientSchema')


new Client({
	prefix: '.',
	commandEditing: true,
	commandLogging: true,
	typing: true,
	console: {
		useColor: true
	},
	consoleEvents: {
		verbose: true
	},
	fetchAllMembers: false,
	messageCacheMaxSize: 30,
	messageCacheLifetime: 300,
	messageSweepInterval: 600,
	restSweepInterval: 60,
	restTimeOffset: 100,
    owners: ['642848512978976768'],
    pieceDefaults: {
		commands: {
			deletable: true
		}
	},
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.cache.size} guilds.`
}).login(process.env.TOKEN);

