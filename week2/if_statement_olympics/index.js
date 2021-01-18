var person = {
    name: "Bobby",
    age: 12
}

if(5>3) {
    console.log("is greater than");
}

if("cat".length===3) {
    console.log("is the length");
}

if("cat" != "dog") {
    console.log("not the same");
}

console.log( person.name.charAt(0) );

if( person.name.charAt(0) === "B" ) {
    console.log( person.name + "is allowed to go to the movie" );
} else {
    console.log( person.name + "is allowed to go to the movie" );
}

console.log( person.name.charAt(0) );

if(person.name.charAt(0) === "B" && person.age >=18 ) {
    console.log( person.name + "is allowed to go to the movie" );
} else {
    console.log( person.name + "is not allowed to go to the movie" );
}

if( 1 === "1" ) {
    console.log("Strict");
} else if( 1 == "1" ) {
    console.log("loose");
} else {
    console.log("not equal at all");
}

if( 1 <= 2 && 2 === 4 ) {
    console.log("yes");
} else {
    console.log("no");
}


