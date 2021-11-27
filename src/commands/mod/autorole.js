const {
    Command
} = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, {
            enabled: true,
            runIn: ['text'],
            requiredPermissions: ["MANAGE_ROLES"],
            aliases: ["ar"],
            cooldown: 3,
            deletable: false,
            nsfw: false,
            permissionLevel: 6,
            description: 'Sets and toggles the autorole function of the bot.',
            extendedHelp: 'No extended help available.',
            usage: '<enable|disable|set|reset|show> [Role:role|Input:string]',
            usageDelim: ' ',
            subcommands: true
        });
    }

    async enable(message) {
        if(message.guild.settings.get('toggles.autorole', true)) return message.channel.send("Autorole already enabled.")
        message.guild.settings.update('toggles.autorole', true)
        message.channel.send('Autorole enabled.')
    }

    async disable(message){
        if(!message.guild.settings.get('toggles.autorole', true)) return message.channel.send("Autorole already disabled.")
        message.guild.settings.update('toggles.autorole', false)
        message.channel.send('Autorole disabled.')
    }

    async set(message, [role]){

        if(!role) throw "Role is required argument"

        message.guild.settings.update('roles.autorole', role.id, message.guild)
        message.channel.send(`Autorole set to \`${role.name}\``)
    }

    async reset(message){
        message.guild.settings.update("roles.autorole", undefined)
        message.channel.send("Autorole reset!")
    }

    async show(message){
        message.channel.send(`Please run the command \`${message.guild.settings.get('prefix')}conf show roles.autorole\` to see the auto role.`)
    }


};