const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "volume",
    description: "To change the server song queue volume",
    usage: "[volume]",
    aliases: ["v", "vol"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("There is nothing playing in this server.", message.channel);
    if (!args[0])return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
    serverQueue.volume = args[0]; 
    let xd = new MessageEmbed()
    .setDescription(`Volume Changer is Disabled For Bot Performance.`)
    .setAuthor("Server Volume Manager", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
    .setColor("BLUE")
    return message.channel.send(xd);
    
 if (!message.guild.me.hasPermission("EXTERNAL_EMOJIS")) return message.reply("I Dont Have External Emojis Permissions.");  
    message.react("741902673858789396")
  },
};
