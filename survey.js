const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answer1 = '';
let answer2 = '';
let answer3 = '';
let answer4 = '';
let answer5 = '';
let answer6 = '';
let answer7 = '';

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  answer1 = answer;
  
  rl.question("What's an activity you like doing? ", (answer) => {
    answer2 = answer;
    
    rl.question("What do you listen to while doing that? ", (answer) => {
      answer3 = answer;
      
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        answer4 = answer;
     
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          answer5 = answer;
       
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            answer6 = answer;
          
            rl.question("What is your superpower? In a few words, tell us what you are amazing at ", (answer) => {
              answer7 = answer;

              console.log(`Hi!, my name is ${answer1}, I like listening to ${answer3} music while doing ${answer2}. My favorite meal is ${answer4} and my favorite thing to eat for that meal is ${answer5}.  My favorite sport is ${answer6}.  My superpower is ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
