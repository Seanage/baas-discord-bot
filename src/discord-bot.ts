import discord from 'discord.js';
import * as IBotRules from './IBotRule';
import * as botRules from './bot-rules';

export function createInstance(): discord.Client {
  const client = new discord.Client();
  const botRuleInstances: IBotRules.IBotRule[] = [];
  for (const [key, value] of Object.entries(botRules)) {
    console.log(`processing bot rule: ${key}`);
    botRuleInstances.push(value);
  }

  console.log(`Found ${botRuleInstances.length} bot rules.`);
  client.on('message', async (message) => {
    if (message.author.bot) {
      return;
    }
    await Promise.all(botRuleInstances.map((botRule) => botRule.handleMessage(message)));
  });
  client.login(process.env.DISCORD_BOT_TOKEN);
  return client;
}
