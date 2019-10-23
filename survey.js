
/*

Focus on the following:
https://github.com/nodejs/node/blob/master/doc/api/readline.md

- The example usage shown at the beginning
- The .question(query, callback) function
- The .close() function

Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:

- What's your name? Nicknames are also acceptable :)
- What's an activity you like doing?
- What do you listen to while doing that?
- Which meal is your favourite (eg: dinner, brunch, etc.)
- What's your favourite thing to eat for that meal?
- Which sport is your absolute favourite?
- What is your superpower? In a few words, tell us what you are amazing at!
- That said, feel free to change the narrative if you have better, more interesting questions to ask them.

- Once all questions are answered, our survey app should output a fully formed paragraph for their online profile, similar to the one shown previously. It should then exit. The user would have to rerun the app to go through the process of generating another profile.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionnaire = 
  [ `What's your preferred first name?\n`
  , `What's an activity you like doing?\n`
  , `What do you listen to while doing that?\n`
  , `Which meal is your favourite (eg: dinner, brunch, etc.)\n`
  , `What's your favourite thing to eat for that meal?\n`
  , `Which sport is your absolute favourite?\n`
  ]

const questionAsker = (questions, answers) => {
  const runningAnswerList = answers || [];
  for (const question of questions) {
    rl.question(question, (answer) => {
      runningAnswerList.push(answer)
      if (questions.length === 1) {
        rl.close();
        console.log(`Thanks ${runningAnswerList[0]}! I, too, like to hear ${runningAnswerList[2]} while I ${runningAnswerList[1]}. Let's eat some ${runningAnswerList[4]} for ${runningAnswerList[3]} while we watch ${runningAnswerList[5]} highlights.`);
      } else {
        questionAsker(questions.slice(1), runningAnswerList);
      }
    });
  }
}

questionAsker(questionnaire);