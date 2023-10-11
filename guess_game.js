const prompt = require('prompt-sync')();
let random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

let min = 1;
let max = 100;
let c = random(min, max);

let num;
let attempts = 0;

while (true) {
  num = parseInt(prompt("Guess the number: "));
  attempts++;

  if (num === c) {
    console.log(`Congratulations! You guessed the correct number, which is ${c}. It took you ${attempts} attempts.`);
    console.log(`YOUR SCORE IS ${100-attempts}`);
    break;
  } else if (num > c) {
    console.log(`No, it's between ${c - 10} and ${num}. Try again.`);
  } else if (num < c) {
    console.log(`No, it's between ${num} and ${c + 10}. Try again.`);
  }
    else if(num == 0)
    {
        console.log(`GOOD GAME, THE CORRECT NUMBER IS ${c}`)
    }
}
