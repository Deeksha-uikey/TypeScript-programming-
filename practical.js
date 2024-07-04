// defining a function for addition of two numbers
function add(num1, num2) {
    return num1 + num2;
}
// testing the function with sample numbers
console.log("\"the sum of 10 and 13 is: ".concat(add(10, 13)));
// defining a function for substraction of two numbers
function substract(num1, num2) {
    return num1 - num2;
}
console.log("The result of 19 and 6 is: ".concat(substract(19, 6)));
// defining a function for multiplication of two numbers
function multiply(num1, num2) {
    return num1 * num2;
}
console.log("the product of 12 and 4 is: ".concat(multiply(12, 4)));
// defining a function for division of two numbers
function divide(num1, num2) {
    if (num2 == 0) {
        return "error division with zero is not allowed";
    }
    return num1 / num2;
}
console.log("result of 100 divided by 5 : ".concat(divide(100, 5)));
console.log("when tying to divide with zero 100 by 0 : ".concat(divide(100, 0)));
// defining a function for finding a remainder of two numbers
function remainder(num1, num2) {
    return num1 % num2;
}
var result = remainder(17, 3);
console.log("the remainder of 17 divided by 3 is: ".concat(result, "}"));
