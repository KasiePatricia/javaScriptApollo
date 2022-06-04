// 1
document.getElementById("header").innerHTML = "Team Apollo"
document.querySelector(".group-name").style.color = "#c40";

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
 remainder = (num1, num2) => {
  return (num1 % num2);
}

console.log(remainder(17, 3));

// 6
function solve(a, b, c) {
  let result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  return "The first root of the quaratic equation is " + result + " while the second root of the quaratic equation is " + result2;
}

console.log(solve(1, 1, -1));

// 7
const myNoun = "dog";
const myAdjedtive = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myAdjedtive + " " + myNoun + " " + myVerb + " " + myAdverb + " to the owner.";

console.log(wordBlanks);

// 8

areaOfCircle = (radius) => {
  let solution = (3.142 * (radius**2));
  return solution;
}

console.log("Area of Circle = " + areaOfCircle(9));

// 9
let p, t, r, SI;
p = 8200
t = 2.6
r = 17.5

SI = (p*t*r)/100;

console.log(SI);

// 10
console.log(remainder(10, 4));

//11
//for data one

meritMass1 = 78;
meritHeight1 = 1.69;

nutjobMass1 = 92;
nutjobHeight1 = 1.95;

let meritBmi1 = (meritMass1/(meritHeight1**2));
console.log(meritBmi1)

let nutjobBmi1 = (nutjobMass1/(nutjobHeight1**2));
console.log(nutjobBmi1)

let meritHigherBMI1 = (meritBmi1 > nutjobBmi1)
console.log("Is Merit BMI? " + meritHigherBMI1)

//for test data 2
meritMass2 = 95;
meritHeight2 = 1.88;

nutjobMass2 = 85;
nutjobHeight2 = 1.76;

let meritBmi2 = (meritMass2/(meritHeight2**2));
console.log(meritBmi2)

let nutjobBmi2 = (nutjobMass2/(nutjobHeight2**2));
console.log(nutjobBmi2)

let meritHigherBMI2 = (meritBmi2 > nutjobBmi2)
console.log("Is Merit BMI? " + meritHigherBMI2)
