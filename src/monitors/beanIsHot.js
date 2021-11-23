const {
    ReactionUserManager
} = require('discord.js');
const {
    Monitor
} = require('klasa');

const yesReaction = ['<:yescheckmark:889342406753935401>'];

const beanIsCool = [
    'bean is hot',
];

module.exports = class extends Monitor {
    constructor(...args) {
        super(...args, {
            enabled: true,
            ignoreOthers: false,
            ignoreEdits: false
        })
    }

    async run(message) {
        if (!new RegExp(beanIsCool.join('|')).test(message.content.toLowerCase())) return null;
        // only works in #general of Sharkland & the testing server, removing this makes it work in all channels
            console.log('Bean sexy owner');
            message.send("so hot and sexy yes yes yes")
            return Promise.all(yesReaction.map(async emote => await message.react(emote)));
        }

    };