console.log("bussiness name generator");

/* Create a business name generator by combining list of adjectives and shop name and another word to create a unique business name 
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let rand = Math.random();
let first, second, third;

// first name
if (rand <= 0.33) {
    first = "Crazy";
}
else if (rand <= 0.66 && rand > 0.33) {
    first = "Amazing";
}
else {
    first = "Fire";
}

// second name
if (rand <= 0.33) {
    second = "Engine";
}
else if (rand <= 0.66 && rand > 0.33) {
    second = "Foods";
}
else {
    second = "Garments";
}

// third name
if (rand <= 0.33) {
    third = "Bros";
}
else if (rand <= 0.66 && rand > 0.33) {
    third = "Limited";
}
else {
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);

