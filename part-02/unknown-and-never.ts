// Unknown type is used to indicate that a variable can hold any type.
let unknownProperty: unknown;
let stringProperty: string;

unknownProperty = 5;
unknownProperty = 'Hello';

if (typeof unknownProperty === 'string') {
  stringProperty = unknownProperty;
  console.log(stringProperty);
}

//  Never type is used to indicate that a function never returns anything.
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
