const {
    ReactionUserManager
} = require('discord.js');
const {
    Monitor
} = require('klasa');

const yesReaction = ['<:yescheckmark:889342406753935401>'];

const danielCool = [
    'daniel is cool'
];

module.exports = class extends Monitor {
    constructor(...args) {
        super(...args, {
            name: 'danielIsCool',
            enabled: true,
            ignoreOthers: false,
            ignoreEdits: false
        })
    }

    async run(message) {
        if (!message.guild && message.guild.id !== '584208881711054918') return null;
        if (!new RegExp(danielCool.join('|')).test(message.content.toLowerCase())) return null;
        // only works in #general of Sharkland & the testing server, removing this makes it work in all channels
        if (['584208881711054920', '889292703525900291'].includes(message.channel.id)) {
            console.log('akaashi be cute tho');
            return Promise.all(yesReaction.map(async emote => await message.react(emote)));
        }

    }
};