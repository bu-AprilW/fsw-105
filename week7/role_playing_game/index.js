const readline = require('readline-sync');

const name = readline.question("What is your name?:");

readline.question("Hello " + name + " Welcome! This is where your journey begins, and may posssibly end. There are dangers ahead that could be fatal, so be careful and pay attention. Just press any key and hit 'enter' when you are ready to begin. Good luck!")

const wildEnemies = ["Evil Wizard", "Mad Hobbit", "Tricky Magician"]
const rewardItems = ["Food", "Health Potion", "Attack Booster", "Tools"]
var spoils = []
let playerHP = 50
const options = ["Walk", "Player Info", "Quit"]
let lostItems = rewardItems[Math.floor(Math.random()*rewardItems.length)];


function loop () {
    const attackPower = Math.floor(Math.random() * (6 - 2 + 1) + 7)
    const enemy = wildEnemies[Math.floor(Math.random() * wildEnemies.length)]
    let enemyHP = 50
    const enemyAttackPow = Math.floor(Math.random() * (4 - 2 + 1) + 7)

    const index = readline.keyInSelect(options, "Which option would you like to choose?")

    if (options[index] == "Quit") {
        return playerHP = 0;
    } else if (options[index] == "Player Info") {
        console.log(name + ": \n" + playerHP + "\n rewardItems: " + spoils)
    } else if (options[index] == "Walk") {
        let key = Math.random()
        if (key <= .3) {
            console.log("Moving...")
        } else if (key >= .3) {
            console.log(enemy + " is attacking!")
            whileLoop:
            while (enemyHP > 0 && playerHP > 0) {

                const choose = readline.question("What would you like to do?, enter 'r' to run away or 'a' to attack: ").toLowerCase()

                switch(choose) {
                    case 'r':
                        const runAway = Math.random()
                        if (runAway < .6) {
                            console.log("Before you can escape," + enemy + "attacks you for: ", enemyAttackPow)
                        } else {
                            console.log("Success! You got away!")
                            break whileLoop
                        }
                    case "a":
                        enemyHP -= enemyAttackPow
                        console.log("You have initiated an attack on " + enemy + " for " + attackPower + " attack power")

                        playerHP -= enemyAttackPow
                        console.log("Enemy has attacked you for: " + enemyAttackPow + " attack power")

                        if (enemyHP <= 0) {
                            console.log("You have killed " + enemy + ". \n" + enemy + " dropped: " + lostItems + ".")
                            let rewards = Math.random()
                            if (rewards <= .4) {
                                spoils.push(lostItems) 
                                console.log(lostItems)
                            } else if (playerHP <= 0) {
                                console.log("You died! " + enemy + " has defeated you." )
                            }
                        }
                }
            }
        }
    }
};

while (playerHP > 0) {
    restorePlayer = function() {
        playerActive = true;
        playerHP = 50;
    };
restorePlayer()
    loop()
};