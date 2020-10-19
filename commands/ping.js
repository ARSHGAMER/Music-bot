module.exports = {
  name: "ping",
  description: "Ping Of The Bot",
  execute(client, message) {
    message.channel.send(`Pong :) 🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
};
