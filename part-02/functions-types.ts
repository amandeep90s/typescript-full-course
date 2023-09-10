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

// Function types callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
