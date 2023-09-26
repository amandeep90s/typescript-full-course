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
