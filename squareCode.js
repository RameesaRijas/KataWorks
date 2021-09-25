const squareCode = function(message) {
  // Put your solution here
  let combinedWord = message.split(" ").join('');
  const stringLength = combinedWord.length;
  const numberInColumn = Math.ceil(Math.sqrt(stringLength));
  for (i = 0; i<= stringLength; i++) {
    for (j = 0; j <= numberInRow; j++){
      console.log(combinedWord[i] + "\n");
    }

  }
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));