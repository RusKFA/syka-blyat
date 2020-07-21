const Discord = module.require("discord.js");
const fs = require("fs");
const { REPL_MODE_STRICT } = require("repl");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Нет прав!");
    let botmessage = args.join(" ");
    message.delete().catch();
    bot.send(botmessage);
};

module.exports.help = {
    name: "say" 
}