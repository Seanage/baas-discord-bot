const discord = require("discord.js");
const express = require('express');

const client = new discord.Client();
const app = express();
const port = 8080;
const redCardList = ['shit', 'fuck', 'bitch', 'bitching',
  'bitches', 'fucks', 'fucking', 'fleshlight']

app.get('/', (req, res) => {
  res.send('pong!');
});

app.listen(port, () => {
  console.log(`starting up on http://localhost:${port}`);
})

client.on("message", async function (message) {
  if (message.author.bot) return;

  const wordsToCheck = message.content.split(' ');
  if (wordsToCheck.find((word) => redCardList.includes(word))) {
    await message.react("🟥");
  }
});
console.log(process.env.WEBSITE_NODE_DEFAULT_VERSION); //TODO: remove once we confirm these are getting set.
client.login(process.env.DISCORD_BOT_TOKEN); //TODO: POC: secure this better?
console.log('bot started');