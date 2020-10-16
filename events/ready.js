module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity(`f!help || Watching ${client.guilds.cache.size} Servers And ${client.users.cache.size} Members`, {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING  
  });
};
