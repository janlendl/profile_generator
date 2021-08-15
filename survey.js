const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable c",): ', (answer1) => {  
  rl.question('What\'s an activity you like doing?: ', (answer2) => {
    rl.question('What do you listen to while doing that?: ', (answer3) => {
      rl.question('Which meal is your favorite (eg. dinner, brunch): ', (answer4) => {
        rl.question('What\'s your favorite thing to eat for that meal?: ', (answer5) => {
          rl.question('Which sport is your absolute favourite?: ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at: ', (answer7) => {
              console.log(
`Name: ${answer1} 
Activities: ${answer2} 
Music: ${answer3}
Favorite Meal: ${answer4}
Favorite Food: ${answer5}
Favorite Sport: ${answer6}
My Superpower: ${answer7}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});