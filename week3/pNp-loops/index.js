var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

for (let x = 0; x < peopleWhoWantToSeeMadMaxFuryRoad.length; x++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[x].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is" + " old enough" + " to see Mad Max.");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is" + " not old enough" + " to see Mad Max.");
    }
}

for( let i = 0; i <= 100; i++ ) {
    i % 2 === 0 ? console.log(i + " is even") : console.log(i + " is odd");
}

var light = false;
var switches = [ 2, 1 ];

for( var i = 0; i < switches.length; i++ ) {
    for( var j = 0; j < switches[i]; j++ ) {
        light = !light;
    }
}

if( light ) {
    console.log("The light is on");
} else {
    console.log("The light is off");
}