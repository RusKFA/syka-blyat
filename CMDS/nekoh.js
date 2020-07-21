const Discord = module.require("discord.js");
const fs = require("fs");
let https = require("https")
module.exports.run = async (bot,message,args) => {




https.get("https://neko-love.xyz/api/v1/nekolewd", (res) => { //nekolewd
    const { statusCode } = res;
    if (statusCode != 200) {
        res.resume;
    }
    res.setEncoding("utf8");
    let rawData = "";
    res.on("data", (chunk) => {
        rawData += chunk;
    });
    res.on("end", () => {
        try {
            const parsedData = JSON.parse(rawData);
            const url = parsedData.url;
            console.log(url);
            message.channel.send(new Discord.MessageEmbed()
                .setImage(url)
            );
        } catch { console.log("api error"); }
    });
}).on("error", (error) => {
    console.log("api error");
});




};
module.exports.help = {
    name: "nekolewd" 
}