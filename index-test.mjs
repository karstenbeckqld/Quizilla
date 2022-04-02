import DiscordJS, {Intents} from 'discord.js';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ],
});
const prefix = '!';
client.commands = new DiscordJS.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file=>file.endsWith('.js'));
for (const file of commandFiles) {
    const command = import (`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log('KaliumPermanganat is ready!');
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.content = 'pong!';
    } else if (command === 'youtube') {
        message.content = 'https://www.youtube.com';
    }
});

client.login(process.env.TOKEN);