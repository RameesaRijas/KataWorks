const repeatNumbers = function(data) {
  let result = "";//string to print
  for (const number of data) {
    if (data.length > 1 && result !== "") {//checking if has one value and not the last value
      result += ',';
    }
    for (let i = 1; i <= number[1]; i++) {
      result += number[0];
    } 
  }
  return result;
};

//Test
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));