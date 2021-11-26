const {
    Command
} = require('klasa');
const ANSWERS = [
    'No',
	'Yes',
	'Maybe',
	'Definitely',
	'Of course',
	'Never',
	'I doubt it',
	"I don't think so"
]

module.exports = class extends Command {
    constructor(...args) {
        super(...args), {
            name: '8ball',
            enabled: false,
            runIn: ['text', 'dm'],
            cooldown: 3,
            nsfw: false,
            description: 'Answers your question',
            usage: '<Question:string>'
        }
    }
    async run(message){
        return message.send(ANSWERS[Math.floor(Math.random() * ANSWERS.length)]);
    }
};