const { Monitor } = require('klasa');

const REACTIONS = ['<:yescheckmark:889342406753935401>', '<:nox:889342294220742656>'];
const no = '<:no:905280654021914695>'

module.exports = class extends Monitor {

	constructor(...args) {
		super(...args, {
			ignoreOthers: false,
			ignoreWebhooks: false
		});
	}

	async run(message) {

		const _channel = await message.guild.settings.get("channels.suggestionChannel")

		if (message.channel.id === _channel) {
			console.log('hi');
			return Promise.all(REACTIONS.map(async emote => await message.react(emote)));
		}
	}

};