const multiplicationTable = function(maxValue) {
  let result = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      if (i === 1 && j > 1) {
        result += j + ' ';
      } else if (j === 1 && i > 1) {
        result += i + ' ';
      } else {
        result += (i * j) + ' ';
      }
    }
    result += '\n';
  }
  return result;
};

//test code
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
