const DiscordJS = require('discord.js');
const {MessageEmbed} = require("discord.js");

module.exports = {
    category: 'Help',
    description: 'Sends an embed',
    permissions: ['ADMINISTRATOR'],
    slash: true,

    callback: ({message, text}) => {
        const help = new MessageEmbed()
            .setColor('#5cd3bf')
            .setTitle('Welcome to Quizilla')
            .setDescription("Hello World!")
            .addFields([
                {name: 'Available commands', value: '/ping', inline: true},
                {name: 'Add two numbers', value: '/add', inline: true}
            ])
        return embed;
    }
}