var str = "hello";
var newstr = str.toUpperCase() + str;

function capitalizeAndLowercase(str) {
    return newstr;
}

capitalizeAndLowercase("hello");

console.log(newstr);


function findMiddleIndex(str) {
    let str2;
    if (str.length % 2 == 0) {
        str2 = (str.length / 2);
    } else {
        str2 = (str.length / 2) - 1;
    }

    console.log(str2);
}

var str = "Hello";

console.log(findMiddleIndex(str));

function firstHalf(str) {
        return str.slice(0, str.length / 2);
}

console.log(firstHalf(str));


function capitalizeAndLowercase(str) {
    return str.charAt(0).toUpperCase() + str.charAt(1).toUpperCase() + str.slice(2);
}

console.log(capitalizeAndLowercase('HEllo'));


// optional code challenge
function capitalize(string) {
    var splitString = string.toLowerCase().split(' ');
    for (var i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(' ');
}

console.log(capitalize("hey friends! practice practice practice!"));