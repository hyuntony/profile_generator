const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let paragraph = "";
rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  paragraph += `My name is ${answer}. `;
  rl.question('What is an activity you like doing? ', (answer) => {
    paragraph += `I like to ${answer}`;
    rl.question('What do you listen to while doing that? ', (answer) => {
      paragraph += ` while listening to ${answer}. `;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
        paragraph += `My favorite meal of the day is ${answer}, `;
        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          paragraph += `where I like to eat ${answer}. `;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            paragraph += `Your favorite sport is ${answer}. `;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              paragraph += `My superpower is ${answer}.`;
              console.log(paragraph);
              rl.close();
            });
          });
        });
      });
    });
  });
});