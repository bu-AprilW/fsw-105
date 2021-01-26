var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//#1
vegetables.pop();

console.log(vegetables);
//#2
fruit.shift();

console.log(fruit);
//#3
console.log(fruit.indexOf("orange"));
//#4
fruit.push("1");

console.log(fruit);
//#5
vegetables.length;

console.log(vegetables.length);
//#6
vegetables.push("3");

console.log(vegetables);
//#7
var food = fruit.concat(vegetables);

console.log(food);
//#8
var remove = food.splice(4,2);

console.log(remove);
//#9
food.reverse();

console.log(food);
//#10
var str = food.join();

console.log(str);