const {MessageActionRow, MessageButton} = require("discord.js");

module.exports = function makeButtons (answers) {
    let row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId(answers[0])
                .setEmoji('')
                .setLabel('A')
                .setStyle('SUCCESS')
        )
        .addComponents(
            new MessageButton()
                .setCustomId(answers[1])
                .setEmoji('')
                .setLabel('B')
                .setStyle('DANGER')
        )
        .addComponents(
            new MessageButton()
                .setCustomId(answers[2])
                .setEmoji('')
                .setLabel('C')
                .setStyle('PRIMARY')
        )
        .addComponents(
            new MessageButton()
                .setCustomId(answers[3])
                .setEmoji('')
                .setLabel('D')
                .setStyle('SECONDARY')
        )

    return row;
}