const readline = require("readline-sync");
const name = readline.question("What is your name? ");

//set variables
var keyFind= false;
var winGame = false;
var gameOver = false;

//game loop
while (!gameOver) {
    //give user options and prompt user to choose option
    var options = ["Put hand in hole", "Find the key", "Open the door"];
    var index = readline.keyInSelect(options, "Which option do you choose?");

    //outcome of each option the user chooses
    switch (index) {
        case 0:
            gameOver = true;
            break;

        case 1:
            if (!keyFind) {
                keyFind = true;
                console.log("You found an old key!\n")
            } else {
                console.log("Sorry no key.\n")
            }
            break;
        
        case 2:
            if (!keyFind) {
                console.log("Door is locked!\n")
            } else {
                console.log("You have unlocked the door!\n");
                winGame = true;
                gameOver = true;
            }
            break;
        default:
            console.log("No escape that way!")
    }
};

//print whether the user wins or loses
winGame ? console.log("You Won!!! You have escaped the room!") : console.log("You died!!! Sorry, you did not escape the room!");