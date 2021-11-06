const {
    Command
} = require('klasa');

module.exports = class extends Command {
    constructor(...args) {
        super(...args), {
            permissionLevel: 6,
            enabled: false,
            name: 'infoimage',
        }
    }
    async run(message) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription("Welcome to Sharkland! Before you go to General, we have some rules for you to read over to make the best experience here. \n \n **1.)** Follow the Discord ToS. The ToS can be found here: https://discordapp.com/terms \n \n **2.)** No spamming/mass mentions. Doing so will lead to either a mute or ban depending on the severity of said spam msgs/mentions. \n \n **3.)** No NSFW. This rule is self explanatory. Sending NSFW will result in a ban. Sending server members NSFW will also lead to a ban. \n \n **4.)** Use Common Sense when necessary. If a Moderator tells you to stop, then stop. Failing to do so will result in a mute/ban depending on the severity. \n \n **5.)** Advertising Other Discord Servers is prohibited. DM Advertising is also prohibited and will result in a ban. \n \n **6.)** No Racism, Homophobia, or making fun of others religions. Doing so will result in a mute/ban depending on the severity. \n \n **7.)** Exploiting the bots will result in a immediate ban. \n \n **8.)** Please do not spread rumors or personal info. If you spread rumors you will be asked for evidence and your intent for said spreading of the rumors, but if you spread personal information, you will be banned. \n \n **9.)** Planning to raid other servers will result in a immediate ban. \n \n **10.)** Targeted harassment of anyone in the server is not allowed. Doing so will result in either a warn or mute depending on the severity. \n \n **11.)** Using alternative accounts to bypass a mute or ban will result in a permanent ban with no way to get unbanned. \n \n **12.)** Names with excessive symbols/letters is not allowed. If left unchanged will result in a ban. \n \n **Note**: Please only ping staff if someone is either being toxic or trolling in chat. Pinging the staff role when there is no actual person trolling in chat will result in a warn.")


        message.channel.send(embed)
    }
};