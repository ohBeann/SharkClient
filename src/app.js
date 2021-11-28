const SharkClient = require("./lib/structures/SharkClient")
require('dotenv').config();


new SharkClient({
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

