const fs = require("fs");

module.exports.run = (Client, guilds, Embed, msg, args) => {

    texts = JSON.parse(fs.readFileSync( "./bot/json/lang/" + guilds[msg.guild.id].language + ".json", 'utf8'));

    Embed.createEmbed(msg.channel, texts.info_text, texts.info_title);
}