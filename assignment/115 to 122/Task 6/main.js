let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
if (chosen === 1)
    [{title, age, available, skills: [ , last]} , , ] = myFriends;
else if (chosen === 2)
    [ , {title, age, available, skills: [ , last]}, ] = myFriends;
else if (chosen === 3)
    [ , , {title, age, available, skills: [ , last]}] = myFriends;

if(chosen >= 1 && chosen <= 3){
    console.log(title);
    console.log(age);
    console.log(`${(available) ? "" : "Not"} Available`);
    console.log(last);
}

// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"