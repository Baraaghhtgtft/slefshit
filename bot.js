const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`Bye Bye Im Sleapiiing`,'https://www.twitch.tv/By:A7MD');
  console.log('BOT ONLINE');
});
client.login('NDQ1MjcwMDQ5Mzg5ODA1NTc5.DwTrIQ.cTOoTWouYddwN-2T5kAKm8zoPY0');
