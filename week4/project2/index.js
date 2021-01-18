const readline = require('readline-sync');

var calculate = function(num1, num2, ops) {
    this.a = parseInt(num1);
    this.b = parseInt(num2);
    this.ops = ops;


    this.result = function() {
    var a = this.a;
    var b = this.b;
    var ops = this.ops;

        if (ops === "add") {
            var result = a + b;
        } else if (ops === "mul") {
            var result = a * b;
        } else if (ops === "div") {
            var result = a / b;
        } else if (ops === "sub") {
            var result = a - b;
        }

        console.log("The result is: " + result);
    };
}

var num1 = readline.question("Enter a number: ");
var num2 = readline.question("Enter another number: ");
var ops = readline.question("Enter an operator: ");

var calc = new calculate(num1, num2, ops);

calc.result();