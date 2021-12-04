const { Client, PermissionLevels} = require('klasa')

Client.defaultPermissionLevels
    .add(5, ({ guild, member }) => guild && member.roles.cache.has(guild.settings.get("roles.modrole")) || member.permissions.has('BAN_MEMBERS'), { fetch: true})
    .add(4, ({ guild, member}) => guild && member.roles.cache.has("916480986097799248"), {break: true})