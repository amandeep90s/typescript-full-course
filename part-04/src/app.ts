// let and const concept
const username = 'Amandeep Singh';
console.log(username);

let age = 30;
age = 33;

console.log(age);

// Arrow function with default parameters
const add = (a: number, b: number = 20) => a + b;
const result = add(4);

const printOutput: (output: number | string) => void = (result) =>
  console.log(result);
printOutput(result);
printOutput('Hello');

const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', (event) => console.log(event));
}

// Spread operator
const hobbies = ['Sports', 'Traveling'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  name: 'Amandeep',
  age: 30,
};
const copyPerson = { ...person, age: 33 };
console.log(copyPerson);

// Rest operator
const addNumbers = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addedNumbers = addNumbers(5, 10, 2, 3.7);
console.log(addedNumbers);
