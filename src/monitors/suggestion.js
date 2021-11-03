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
		if (!message.guild && message.guild.id !== '584208881711054918') return null;

		// #suggestions
		if (['774106773560360990'].includes(message.channel.id)) {
			console.log('hi');
			return Promise.all(REACTIONS.map(async emote => await message.react(emote)));
		}

		if (message.channel.id !== '774106773560360990') return null;
		return Promise.all(REACTIONS.map(async emote => await message.react(emote)));
	}

};