const {
    Command
} = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            enabled: false,
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
        let image_query = message.args.join(" ");

        if (!message.guild.settings.get("nsfw", false)) {
            if (message.args === "porn",
                "hentai",
                "nsfw",
                "pussy",
                "ass",
                "dick",
                "deep throat",
                "deepthroat",
                "doggystyle",
                "doggystyle",
                "cum",
                "face sit",
                "facesit",
                "milf",
                "upskirt",
                "yuri",
                "nude",
                "nood",
                "nudity",
                "naked",
                "18",
                "ero",
                "masturbate",
                "masturbation",
                "masterbate",
                "masterbation",
                "sex",
                "strip",
                "smut") return message.channel.send("You cannot search for this with NSFW disabled!")
        }
        const image_results = await google.scrape(image_query, 10);

        const img = image_results[Math.floor(Math.random() * image_results.length)];

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img.url)

        message.channel.send(embed)
    }

};