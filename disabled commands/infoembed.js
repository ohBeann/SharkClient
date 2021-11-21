// const {
//     Command
// } = require('klasa');

// module.exports = class extends Command {
//     constructor(...args) {
//         super(...args), {
//             permissionLevel: 6,
//             enabled: false,
//             name: 'infoembed',
//         }
//     }
//     async run(message) {
//         const Discord = require('discord.js');
//         const embed = new Discord.MessageEmbed()
//             .setColor("BLUE")
//             .setImage("https://cdn.discordapp.com/attachments/906377210120777768/906377904823345172/InfoTemplate.png")
//             .setDescription("For the XP Roles that are offered here, here's the levels required to get the XP Role. You can use Arcane to check your rank by doing \"arank\". \n \n **Level 5**: Dwarf Laternshark \n \n **Level 10**: Bull Shark \n \n **Level 20**: Mako Shark \n \n **Level 40**: Tiger Shark \n \n **Level 60**: Great White \n \n **Level 70**: Basking Shark \n \n **Level 90**: Megalodon \n \n You can also unlock a custom role at level 50. The custom role will be your and only yours. If you do reach level 50, contact a staff member to grab your custom role! They need the name and Hex (color).")

//         message.channel.send(embed)
//     }
// };