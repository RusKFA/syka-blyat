const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
let profile = require("../profile.json");


if (message.mentions.users.first()) {
  rUser = message.mentions.users.first();
} else {
  rUser = message.author;
} 
   
    let uid = message.author.id;
  if(!profile[uid]){
    profile[uid] ={
      coins:10,
      warns:0,
      xp:0,
      lvl:0,
      ban:0,
      c:0,

    };
  };
  let u = profile[uid];


  if(u.coins < (50)) return message.channel.send("Не хватает денег");
  if(u.c == 20) return message.channel.send("Вы сыграли слишком много раз, новые игры будут доступны через час.");
  
  (u.coins = (u.coins - 50))
  u.c = (u.c +1)

  if(profile[rUser.id].c == 20){
    function myFunc(arg) {
      console.log(`arg was => ${arg}`);
      message.channel.send("таймер сработал ок ")
      u.c = (u.c - 20)
    }
    
    setTimeout(myFunc, 30000, 'Ааааааааааа');
  }
  
  
    



var random = Math.floor(Math.random() * 3); // Объявление переменной random - она вычисляет случайное число от 1 до 2

if (random == 1) { // Если вычислено число 1, то вы выиграли.

    
    

    
  
  (u.coins = (u.coins + 150))
 
  let embed = new Discord.MessageEmbed()
  
  .setColor(`#000000`)
  .setDescription("Вы выиграли!")

  .addField("На счёт зачислено","100 монет")
  .addField("Количество монеток ",`${profile[rUser.id].coins}`)
  
  message.channel.send(embed)




} else if (random == 2) { // Если вычислено число 2, то вы проиграли.

  (u.coins = (u.coins - 50))
  


  
  let embed = new Discord.MessageEmbed()
   
  .setColor(`#000000`)
  .setDescription("Вы проиграли!")

  .addField("Со счёта снято","100 монет")
  .addField("Количество монеток  ",`${profile[rUser.id].coins}`)

   message.channel.send(embed)
 


    
    


} 


// хочу добавить чёто типо  } else if (random == 2) { 
    //message.channel.send('вы сорвали куш!')


};
module.exports.help = {
    name: "casino" 
}
