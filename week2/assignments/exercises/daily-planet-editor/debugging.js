/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var Enemies = ["Lex","Batman","Darkside","Brainiac","General Zod","Doomsday"];

funtion whoWins(isThereKryptonite,enemyName) {
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +"could possibly win this one.";
    }
}

for (var i=0; i < enemies.length; i++) {
    var isThereKryptonite

    if (i % 2 ===0) {
        isThereKryptonite = true
    } else {
        isThereKryptonite = false
    }

    console.log(whoWins(isThereKryptonite,enemies[i]));
}

function HowAttractedIsLoisLaneToMe () {
    return Math.floor((Math.random() * 10) + 1);
}

console.log( HowAttractedIsLoisLaneToMe ());

var clarkKent = true;
var superman = false;

while (clarkKent) {
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange =Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}
    for (var i=0;i<enemies.length;i++)
{
    var is_there_kryptonite;
    if (i%2=== 0) {
        is_there_kryptonite = true;
    } else {
        is_there_kryptonite = false;
    }
    console.log(Who_Wins(is_there_kryptonite,enemies[i]));
}

if (!is-there-kryptonite) {
    return "Superman beats " +enemy_name+ ", of course";
} else {
    return "Depends on how quick Superman can get rid of the Kryptonite."  +enemy_name+ "could possibly win this one.";
}


function HowAttractedIsLoisLaneToMe ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Mat.random()*10)+1);
}

console.log( HowAttractedIsLoisLaneToMe ()) ;

var clarkKent = true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange =Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent = false;
        superman = true;
    } else {
        clarkKent = true;
        superman = false;
        console.log("Now I'm Superman!");
    }
}
