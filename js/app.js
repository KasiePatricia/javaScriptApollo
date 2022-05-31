// 1
document.getElementById("header").style.color = "#c40";

// 2
const teamNames = [
  "Omokaro Loveth @Nutjob (Team Lead)",
  "Kasie Ugwu @kasie",
  "Stanley Chijioke @stanleyceejay",
  "Shodipe Oladele @ladel",
  "Anyanwu Chukwuemeka @Krisemeka",
  "Avwunudiogba Andrew @drew"
];

console.log(teamNames[1]);

// 3
let person = {
  firstName : "Kasie",
  lastName : "Ugwu",
  bestMovie : "Anna",
  bestFood : "Rice",
  complexion : "dark",
  birthMonth : "August",
  state : "Enugu",
  groupName : "Team Apollo"
};

console.log(person.bestMovie);

// 4
let noun = "Andrew";
let verb = "enjoys";
let adjective = "good";

console.log(`${noun} ${verb} ${adjective} music.`);
console.log(`He ${verb} playing football with his ${adjective} neighbors.`);
console.log(`${noun} attends a ${adjective} school.`);
console.log(`She ${verb} a ${adjective} meal.`);
console.log(`${noun}'s father is a ${adjective} man`);

// 5
function division(num1, num2) {
  console.log(num1 % num2);
}

division(17,3);

// 6
function solve(a, b, c) {
  let result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  return result + " " + result2;
}

console.log(solve(1, 1, -1));

// 7
const myNoun = "dog";
const myAdjedtive = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "to the owner";

console.log(`The ${myAdjedtive} ${myNoun} ${myVerb} ${myAdverb} ${wordBlanks}`);

// 8

function calcArea(radius){
  let area = 3.142 * radius**2;
  console.log(area);
}

calcArea(9);

// 9
let p, t, r, SI;
p = 8200
t = 2.6
r = 17.5

SI = (p*t*r)/100;

console.log(SI);

// 10
division(10,4);
