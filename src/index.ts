
import * as webService from './web-service';
import * as discordBot from './discord-bot';

discordBot.createInstance();
webService.createInstance();

console.log('bot started');

