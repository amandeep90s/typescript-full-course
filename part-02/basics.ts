function add(
  num1: number,
  num2: number,
  printResult: boolean,
  phrase: string
): number | void {
  const result = num1 + num2;
  if (printResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const num1 = 22;
const num2 = 5;
const printResult = true;
const phrase = 'Result is: ';

const result = add(num1, num2, printResult, phrase);
console.log(result);
