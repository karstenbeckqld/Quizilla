const questions = require('../data/questions.js');
const {MessageActionRow, MessageButton, Interaction, User, MessageEmbed} = require("discord.js");
const buttons = require('./displayButtons.js');

function getRandomNumber(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}


module.exports = async function mcquestions(channel) {
    console.log('MCQuestions have started.');

    // Declare variable to hold random number for questions
    let randomIndex = getRandomNumber(1, 3);

    // Create question object
    let {question, answers, correct, points} = questions.theme[0].history[randomIndex];

    let buttonRow = buttons(answers);

    const displayQuestions = new MessageEmbed()
        .setColor('#52d9c1')
        .setTitle(`${question}`)
        .setDescription(`A:  ${answers[0]} \n 
        B:  ${answers[1]} \n
        C:  ${answers[2]} \n
        D:  ${answers[3]}`)


    channel.send({
        embeds: [displayQuestions],
        components: [buttonRow]
    })


   const filter = (btnInt) => {
         return btnInt.user.id;
     };

     const collector = channel.createMessageComponentCollector({
         filter,
         max: 1,
         time: 1000 * 30,
     });

     collector.on('collect', (ButtonInteraction) => {
         ButtonInteraction.reply({
             content: `You've chosen ${ButtonInteraction.customId}`,
         })
     });

     collector.on('end', (collection) => {
         collection.forEach((click) => {
             let userID = click.user.id;
             let chosenAnswer = click.customId;
             console.log(chosenAnswer, correct);
         })
     });

    console.log('MCQuestions have ended.');
};


// await interaction.reply({
//     content: `${question}\n
//          A: ${answers[0]}\n
//          B: ${answers[1]}\n
//          C: ${answers[2]}\n
//          D: ${answers[3]}\n
//          Choose your answer:\n`,
//     components: [buttonRow],
// });
