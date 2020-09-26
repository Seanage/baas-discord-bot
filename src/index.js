"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const client = new discord_js_1.default.Client();
const port = 8080;
const redCardList = ['shit', 'fuck', 'bitch', 'bitching',
    'bitches', 'fucks', 'fucking', 'fleshlight'];
app.get('/', (req, res) => {
    res.send('pong!');
});
app.listen(port, () => {
    console.log(`starting up on http://localhost:${port}`);
});
client.on("message", async function (message) {
    if (message.author.bot)
        return;
    const wordsToCheck = message.content.split(' ').toLowerCase();
    if (wordsToCheck.find((word) => redCardList.includes(word))) {
        await message.react("🟥");
    }
});
client.login(process.env.DISCORD_BOT_TOKEN); //TODO: POC: secure this better?
console.log('bot started');
//# sourceMappingURL=index.js.map