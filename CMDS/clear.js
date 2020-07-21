const Discord = module.require("discord.js");
const fs = require("fs");
const { REPL_MODE_STRICT } = require("repl");
module.exports.run = async (bot,message,args) => {
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Нет прав!");
    if(args[0]>100) return bot.send(`укажите значение меньше 100`)
    if(args[0]<1) return bot.send(`укажите значение больше 1`)
    message.channel.bulkDelete(args[0]).then(() =>{
    bot.send(`Удалено ${args[0]} cообщений`).then(msg => msg.delete(15*10000));
    });
    bot.send(botmessage);
    }catch(err){
        console.log(err.name)
        console.log("ошибка в clear")
    }
};

module.exports.help = {
    name: "clear" 
}