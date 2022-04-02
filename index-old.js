const DiscordJS = require('discord.js');
const dotenv = require('dotenv');
const WOKCommands = require('wokcommands');
const path = require('path');
const {Intents} = require("discord.js");
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