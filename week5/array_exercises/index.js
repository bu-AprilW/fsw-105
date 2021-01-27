//SectionA
const array = [3, 6, 8, 2];

const fiveAndGreaterOnly = function(number) {
    return number > 5;
}

const filtered = array.filter(fiveAndGreaterOnly);

console.log(filtered);

const evensOnly = array.filter(number => number % 2 == 0);

console.log(evensOnly);

//SectionB
var num = [2, 5, 100];
var doubleNumbers = num.map(function(num) { return num*2; });

console.log(doubleNumbers);

var strNum = num.map(function(e) {return e.toString()});
console.log(strNum);


const names = ["john", "jacob", "jingleheimer", "schmidt"];
newNames = names.map( a => a.charAt(0).toUpperCase() + a.substr(1) );

console.log(newNames);

//SectionC
const sum = [1, 2, 3].reduce(total,0);

function total(accumulator, a) {
    return accumulator + a;
}

console.log(sum);


const arr1 = [1, 2, 3];

console.log(arr1.join(""));


let voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(voters.filter(person => person.voted).length);

//SectionD
let nums = [1, 3, 5, 2, 90, 20];
nums.sort( function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(nums);


nums.sort(function(a, b){return b-a});

console.log(nums);

//dog, wolf, by, family, eaten
function lengthSort(array) {
    return array.slice().sort(function(a, b) {
        return a.length - b.length;
    });
}

var array1 = ["dog", "wolf", "by", "family", "eaten"];
var array2 = lengthSort(array1);

console.log(array2);