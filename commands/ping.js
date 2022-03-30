module.exports = {
    category: 'Testing',
    description: 'Replies with Pong.',
    slash: 'both',
    testOnly: true,

    callback: ({message, interaction}) => {
        const reply = 'Pong!'
        if (message === 'ping') {
            message.reply({
                content: reply
            })
            return
        }

        interaction.reply({
            content: reply
        })

        return {
            content: reply
        }
    },
};