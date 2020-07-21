const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.MessageEmbed()
    
    .setTitle("Комманды")
    .setColor(`#000000`)
    .addField("neko", "Найди себе вайфу!")
    .addField("nekolewd", "Хентайчег")
    .addField("warn", "Выдаёт предупреждение")
    .addField("ban", "Выдаёт бан")
    .addField("clear", "Чистит чат, лимит 100 сообщений")
    .addField("say", "Пусть бот скажет за тебя!")
    .addField("invite", "Даёт приглашение для бота")
    .addField("casino", "Играй в казино и получи немного денег!")
    .addField("money", "Узнай свой баланс")
    




    bot.send(embed);
};
module.exports.help = {
    name: "help" 
}

