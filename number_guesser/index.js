


let prompt = require("prompt-sync")();
let attempt = 3;
let inputs = [];
while (attempt > 0) {
  let answer = prompt("Guess a number: ");
  if (answer) {
    attempt --;
  }
  if (inputs.includes(answer)) {
    console.log("already guessed");
  } else {
    inputs.push(answer);
    const generate = Math.floor(Math.random() * 100);
    console.log(generate);
    answer = Number(answer);
    if (isNaN(answer)) {
      console.log("Error! Invalid entry");
    } else {
      if (generate < answer) {
        console.log("too high");
      } else if (generate > answer) {
        console.log("too low!");
      } else {
        console.log("You guessed it");
      }
    }
  }
}

if (attempt === 0) {
  console.log("You got it! You took 3 attempts!");
}
