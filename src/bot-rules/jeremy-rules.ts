import * as IBotRule from '../IBotRule';
import {Message} from 'discord.js';

export async function handleMessage(message: Message): Promise<void> {
  const wordsToCheck = message.content.toLowerCase().split(' ');
  if (wordsToCheck.includes('less')) {
    message.reply('*fewer');
  }
}

export default {handleMessage} as IBotRule.IBotRule;
