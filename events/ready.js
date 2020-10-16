module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  setInterval(() => {
  await client.user.setActivity(`f!help || Watching ${client.guilds.cache.size} Servers And ${client.users.cache.size} Members`, {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING  
  });
}, 300000);
};
