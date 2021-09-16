const camelCase = input => {
  let splittedInput = input.split(' ');//splitting word by word
  let InputCamelCased = '';
  let lowercased = '';
  for (let i = 0; i < splittedInput.length; i++) {
    if (i === 0) {
      InputCamelCased += splittedInput[i].toLowerCase();//first word lowercase
    } else {
      lowercased = splittedInput[i].toLowerCase();
      InputCamelCased += (lowercased.charAt(0).toUpperCase() + lowercased.slice(1));//making first letter uppercase
    }
  }
  return InputCamelCased;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));