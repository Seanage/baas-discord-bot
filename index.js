const discord = require("discord.js");
const config = require("./config.json");

const client = new discord.Client();
const redCardList = ['shit', 'fuck', 'bitch', 'bitching',
  'bitches', 'fucks', 'fucking', 'fleshlight']

client.on("message", async function (message) {
  if (message.author.bot) return;

  const wordsToCheck = message.content.split(' ');
  if (wordsToCheck.find((word) => redCardList.includes(word))) {
    await message.react("🟥");
  }
});
console.log(process.env.WEBSITE_NODE_DEFAULT_VERSION);
client.login(process.env.DISCORD_BOT_TOKEN); //TODO: POC: secure this better?
console.log('bot started');