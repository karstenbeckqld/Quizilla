import DiscordJS, {Intents} from 'discord.js';
import dotenv from 'dotenv';
import WOKCommands from 'wokcommands';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();


const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ],
});

client.on('ready', () => {
    console.log('KaliumPermanganat is ready');
    new WOKCommands(client, {
        // Name of folder that holds command files
        commandsDir: path.join(__dirname, 'commands'),
        testServers: ['955910199456170085'],
    })
});

client.login(process.env.TOKEN);
console.log(__dirname);