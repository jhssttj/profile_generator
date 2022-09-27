const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {
  name: '',
  activity: '',
  music: '',
  meal: '',
  food: '',
  sports: '',
};

rl.question('Q1: What is your name?', (answer) => {
  profile.name = answer;
  rl.question('Q2: Whats an activity you like doing?', (answer) => {
    profile.activity = answer;
    rl.question('Q3: What do you listen to while doing that?', (answer) => {
      profile.music = answer;
      rl.question('Q4: Which meal is your favourite (e.g: dinner, lunch, etc.)?', (answer) => {
        profile.meal = answer;
        rl.question('Q5: What is your favourite thing to eat for that meal?', (answer) => {
          profile.food = answer;
          rl.question('Q5: Which sports is your favourite to play?', (answer) => {
            profile.sports = answer;
            console.log(`${profile.name} likes to enjoy the activity of ${profile.activity} and during it, they like to listen to ${profile.music}. Their favourite mealtime is ${profile.meal} and their favourite thing to eat during that time is ${profile.food}. ${profile.name}'s favourite sports is ${profile.sports}.`);
            rl.close(); 
          });
        });
      });
    });
  });
});

