var sum = function(number1, number2) {
    return number1 + number2;
};

console.log( sum(3,7) );


var largestNumber = function(num1, num2, num3) {
    var greatestNum = 0;
    var numbers = [num1, num2, num3];

    for( var i = 0; i < numbers.length; i++) {
        if( numbers[i] > greatestNum) {
            greatestNum = numbers[i]
        }
    }

    console.log(greatestNum);
};

largestNumber(5, 2, 8);


var evenOdd = function(number) {
    if( number % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

evenOdd(5);

//extra credit

var fibonacci = function (n) {
    if (n===1) {
        return [0, 1];
    } else {
        var s = fibonacci(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fibonacci(8));

var str = "82029982";
var mostLength = 0;
var mostFreqChar;
for(t = 0; t < 10; t++) {
    var res = str.length - str.replace(new RegExp(t, "g"), "").length;
    if(res > mostLength) {
        mostFreqChar = t;
        mostLength = res;
    }
}

console.log(mostFreqChar);