// Function return type is number, meaning it returns a number
function add(input1: number, input2: number): number {
  return input1 + input2;
}

// Function return type is void, meaning it doesn't return anything
function printResult(num: number): void {
  console.log('Result: ' + num);
}

let combinedValues: (a: number, b: number) => number; // Function as types
combinedValues = add;

printResult(combinedValues(8, 8));
