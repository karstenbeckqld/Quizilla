const DiscordJS = require('discord.js');
const {MessageActionRow, MessageButton, ButtonInteraction} = require("discord.js");

module.exports = {
    category: 'Testing',
    description: 'Button Testing',
    slash: true,
    testOnly: true,

    callback: async ({interaction: msgInt, channel}) => {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('a')
                    .setEmoji('')
                    .setLabel('A')
                    .setStyle('SUCCESS')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('b')
                    .setEmoji('')
                    .setLabel('B')
                    .setStyle('DANGER')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('c')
                    .setEmoji('')
                    .setLabel('C')
                    .setStyle('PRIMARY')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('d')
                    .setEmoji('')
                    .setLabel('D')
                    .setStyle('SECONDARY')
            )
        await msgInt.reply({
            content: 'Choose your answer:',
            components: [row],
        });

        const filter = (btnInt) => {
            return msgInt.user.id === btnInt.user.id;
        };

        const collector = channel.createMessageComponentCollector({
            filter,
            max: 1,
            time: 1000 * 30,
        });

        collector.on('collect', (ButtonInteraction) => {
            ButtonInteraction.reply({
                content: `You clicked button ${ButtonInteraction.customId}`,
            })
        });

        collector.on('end', (collection) => {
            collection.forEach((click) => {
                console.log(click.user.id, click.customId);
            })
        })
    },
}