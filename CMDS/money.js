const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {

    let rUser;

if (message.mentions.users.first()) {
    rUser = message.mentions.users.first();
  } else {
    rUser = message.author;
  } 


    let embed = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .addField("Количество монеток  ",`${profile[rUser.id].coins}`)

    message.channel.send(embed)


};
module.exports.help = {
    name: "money" 
}