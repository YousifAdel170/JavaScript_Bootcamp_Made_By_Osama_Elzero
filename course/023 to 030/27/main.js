let theName = "Ahmed";

console.log(theName);

console.log(theName[2]);
console.log(theName.charAt(2));

console.log(theName.length);

console.log(theName[5]);            //       undefined
console.log(theName.charAt(5));     // empty ' '

theName = "  Ahmed  ";
console.log(theName);

console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

/* To make the letter m inside ahmed uppercase only and display it only */
console.log(theName.trim().charAt(2).toUpperCase());

theName = "           Yousif  Adel    ";
console.log(theName.trim());


