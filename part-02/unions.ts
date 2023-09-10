function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text' // Literals
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(22, 5, 'as-number');
console.log(combineAges);

const combineStringAges = combine('22', '8', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Amandeep ', 'Singh', 'as-text');
console.log(combineNames);
