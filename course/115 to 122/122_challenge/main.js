/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if(chosen === 1)
    ( [{title, age, available, skills: [, last]}, ,] = myFriends);
else if (chosen === 2)
    ( [, {title, age, available, skills: [, last]},] = myFriends);
else if(chosen === 3)
    ( [, ,{title, age, available, skills: [, last]}] = myFriends);


if (chosen >= 1 && chosen <= 3){
    console.log(title);
    console.log(age);
    available ? console.log("Available") : console.log("Not Avaliable");
    console.log(last);
}

