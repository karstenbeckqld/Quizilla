const DiscordJS = require('discord.js');
//const {options} = require("./add");

module.exports = {
    category: 'Add',
    description: 'Adds two numbers.',
    slash: true,
    testOnly: true,
    options: [
        {
            name: 'num1',
            description: 'First number.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
        },
        {
            name: 'num2',
            description: 'Second number.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
        }
    ],
    callback: ({interaction, options}) => {

        if (!interaction) {
            return
        } else if (interaction) {
            const num1 = options.getNumber('num1');
            const num2 = options.getNumber('num2');
            interaction.reply({
                content: `The sum is ${num1 + num2}`,
            });
        }
    },
};

