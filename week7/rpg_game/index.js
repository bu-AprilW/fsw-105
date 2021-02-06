const readline = require("readline-sync");

const name = readline.question("What is your name? ");

readline.question("Hello " + name + " Welcome! This is where your journey begins, and may possibly end. There are dangers ahead that could be fatal, so be careful and pay attention. Just press any key and hit 'enter' when you are ready to begin. Good luck!");

const wildEnemies = ["Evil Wizard", "Mad Hobbit", "Tricky Magician"];
const loot = ["Food", "Health Potion", "Attack Booster"];
var treasure = [];
let userHP = 40;
const options = ["Walk", "Quit", "Print"];
let pickUp = loot[Math.floor(Math.random()*loot.length)];


function game () {
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const enemy = wildEnemies[Math.floor(Math.random() * wildEnemies.length)];
    let enemyHP = 40;
    const enemyAttackPow = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index = readline.keyInSelect(options, "Which option would you like to choose?");

    if (options[index] == "Quit") {
        return userHP = 0;
    } else if (options[index] == "Print") {
        console.log(name + ":\n" + userHP + "\nloot: " + pickUp);
    } else if (options[index] == "Walk") {
        let key = Math.random();
        if (key <= .3) {
            console.log("Walking....");
        } else if (key >= .3) {
            console.log(enemy + " is approaching.");
            
            while (enemyHP > 0 && userHP > 0) {
                const user = readline.question("What would you like to do? enter 'r' to run away or 'a' to attack:");

                switch(user) {
                    case 'r':
                        const runAway = Math.random();
                        console.log(runAway);
                        if (runAway < .5) {
                            console.log("Before you can run away " + enemy + " attacks you with: " + enemyAttackPow + " attack power");
                        } else if (runAway > .6) {
                            console.log("You ran away!");
                            
                        }

                    case 'a':
                        enemyHP -= enemyAttackPow;
                        console.log("You attacked " + enemy + " with: " + attackPower + " attack power");

                        userHP -= enemyAttackPow;
                        console.log("Enemy has attacked you with: " + enemyAttackPow + " attack power");
                        
                        if (enemyHP <= 0) {
                            console.log("You killed " + enemy + ".\n" + enemy + " left: " + pickUp);
                            let prize = Math.random();
                            if (prize <= .3) {
                                treasure.push(pickUp);
                            }
                            } else if (userHP <= 0) {
                                console.log(enemy + " has defeated you. GAME OVER!");
                            }
                }
            }
        }
    }
}

while (userHP > 0) {
    userRestore = function() {
        userActive = true;
        userHP = 40;
    };
    userRestore();
        game();
}