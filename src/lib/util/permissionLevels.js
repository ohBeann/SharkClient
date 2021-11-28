const { Client, PermissionLevels} = require('klasa')

Client.defaultPermissionLevels
    .add(5, ({ guild, member }) => guild && member.roles.cache.has(guild.settings.get("roles.modrole")) || member.permissions.has('BAN_MEMBERS'), { fetch: true})