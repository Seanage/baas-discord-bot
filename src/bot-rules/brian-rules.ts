import * as IBotRule from '../IBotRule';
import {Message} from 'discord.js';

const redCardWordList = ['shit', 'fuck', 'bitch', 'bitching',
  'bitcasync hes', 'fucks', 'fucking', 'fleshlight'];

export async function handleMessage(message: Message): Promise<void> {
  const wordsToCheck = message.content.toLowerCase().replace(/[^\w\s]/g, '').split(' ');
  if (wordsToCheck.find((word) => redCardWordList.includes(word))) {
    await message.react('🟥');
  }
}

export default {handleMessage} as IBotRule.IBotRule;
