const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {















var name = new Array( // Объявление массива name и занесение в него большого количества имён
    'StarBound','Skyrim','Lego BatMan 3 - Beyond Gotham',' Lego the Hobbit',' Space Rangers HD - A War Apart',
    ' Assassin`s Creed 4, Black Flag.',' Bard`s Tale',' Call Of Duty - Black Ops',' Call Of Duty Modern Warfare',' Call Of duty MW 2',
    ' Call Of Duty MW 3',' Call Of Duty - United Offence',' Call Of Duty - World at War',' Call of duty 2',' Call of duty 1',
    ' Call of duty 3',' Call of Duty 4',' Diablo III',' Dishonored',' Flatout 2',
    ' GTA San Andreas',' Lego Harry Potter',' Lego Marvel Super Heroes',' Lego Star Wars I',' Lego Star wars II',
    ' Lego Star Wars III, the clone wars',' Star Wars Battlefront',' Star Wars Battlefront 2',' Skyrim',
    ' Warcraft',' Warcraft III',' Spore space Adventure',' HearthStone',
    ' Call Of Duty ghosts',' Minecraft',' Medal Of Honor AirBorn'
);
var RandElement = name[Math.floor(Math.random()*(name.length))]; // Выбор случайного элемента из массива
message.channel.send(RandElement) // Отправка сообщения со случайным элементом из массива в чат




};
module.exports.help = {
    name: "games" 
}