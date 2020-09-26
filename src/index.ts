import discord from 'discord.js';
import express from 'express';

const app = express();
const client = new discord.Client();
const port = 8080;
const redCardWordList = ['shit', 'fuck', 'bitch', 'bitching',
  'bitches', 'fucks', 'fucking', 'fleshlight'];

app.get('/', (req, res) => {
  res.send('pong!');
});

app.listen(port, () => {
  console.log(`starting up on http://localhost:${port}`);
});

client.on('message', async (message) => {
  if (message.author.bot) {
    return;
  }

  const wordsToCheck = message.content.split(' ');
  if (wordsToCheck.find((word) => redCardWordList.includes(word))) {
    await message.react('🟥');
  }
});
client.login(process.env.DISCORD_BOT_TOKEN);
console.log('bot started');
