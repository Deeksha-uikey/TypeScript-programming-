// defining a function for addition of two numbers

function addition (num1: number , num2: number): number {
  return num1 + num2;
}
// testing the function with sample numbers
console.log(`"the sum of 10 and 13 is: ${addition(10, 13)}`);

// defining a function for substraction of two numbers
function substraction(num1: number, num2: number): number {
    return num1 - num2;
}   

console.log(`The result of 19 and 6 is: ${substraction(19,6)}`);

// defining a function for multiplication of two numbers
function multiplication(num1: number, num2: number) : number {
    return num1 * num2;
}
console.log(`the product of 12 and 4 is: ${multiplication(12,4)}`);

// defining a function for division of two numbers
function division(num1: number, num2: number) : number | string{
    if (num2 == 0) {
        return `error division with zero is not allowed`;
    }
    return num1/ num2 ;
}
console.log (`result of 100 divided by 5 : ${division(100,5)}`);
console.log (`when tying to divide with zero 100 by 0 : ${division(100,0)}`)
 
// defining a function for finding a remainder of two numbers
function Remainder(num1: number, num2: number) : number {
    return num1 % num2 ;
}
const Result  = Remainder(17,3);
console.log(`the remainder of 17 divided by 3 is: ${Result}}`);
