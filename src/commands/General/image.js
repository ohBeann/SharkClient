const {
    Command
} = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            enabled: true,
            runIn: ['text'],
            aliases: ['img'],
            description: 'Scrapes an image off google',
            extendedHelp: 'No extended help available.',
        });
    }

   async run(message, args) {
    var Scraper = require('images-scraper');
    const google = new Scraper({
        puppeteer: {
            headless: true
        },
    });
    const Discord = require('discord.js');
    const image_query = message.args.join(" ");

    const image_results = await google.scrape(image_query, 10);

    const img = image_results[Math.floor(Math.random() * image_results.length)];

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img.url)

    message.channel.send(embed)
    }

};