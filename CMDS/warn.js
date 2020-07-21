const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("нет прав");
let rUser;

if (message.mentions.users.first()) {
    rUser = message.mentions.users.first();
  } else {
    rUser = message.author;
  } 


profile[rUser.id].warns++;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err)
    });


if(profile[rUser.id].warns >=3){
    message.guild.member(rUser).kick("3/3 предупреждений")
    }

    let embed = new Discord.MessageEmbed()
    .setColor(`#000000`)
    .setDescription("предупреждение")

    .addField("Администратор",message.author.username)
    .addField("выдал предупреждение",`${rUser.username}`)
    .addField("Количество предупреждений",`${profile[rUser.id].warns}/3`)

    message.channel.send(embed)
}


try{
}catch(err){
    if(err.name === "ReferenceError")
    console.log("ОШИБКА")
    console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
 }

module.exports.help = {
    name: "warn" 
}
