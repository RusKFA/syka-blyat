

const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {

bot.generateInvite(["ADMINISTRATOR"]).then(link => {message.channel.send(link)} );

};
module.exports.help = {
    name: "invite" 
}








