import discord from 'discord.js';

export interface IBotRule {
    handleMessage(message: discord.Message): Promise<void>;
}


