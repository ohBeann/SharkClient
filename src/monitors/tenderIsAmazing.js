const {
    ReactionUserManager
} = require('discord.js');
const {
    Monitor
} = require('klasa');

const yesReaction = ['<:yescheckmark:889342406753935401>'];

const tenderAmazing = [
    'tender is amazing'
]

module.exports = class extends Monitor {
    constructor(...args) {
        super(...args, {
            name: 'tenderIsAmazing',
            enabled: true,
            ignoreOthers: false,
            ignoreEdits: false
        })
    }

    async run(message) {
        if (!message.guild && message.guild.id !== '584208881711054918') return null;
        if (!new RegExp(tenderAmazing.join('|')).test(message.content.toLowerCase())) return null;
        // only works in #general of Sharkland & the testing server, removing this makes it work in all channels
        if (['584208881711054920', '889292703525900291'].includes(message.channel.id)) {
            console.log('tender is amazing indeed');
            return Promise.all(yesReaction.map(async emote => await message.react(emote)));
        }

    }
};