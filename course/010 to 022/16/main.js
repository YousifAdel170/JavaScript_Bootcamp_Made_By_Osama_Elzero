/* Legacy Way */
let a = "We Love", 
    b = "JS", 
    c = "And", 
    d = "Programming";

console.log(a + " " + b + " " + c + " " + d);

/* New Way with the help of ECMAscript */
console.log(`${a} ${b} ${c} ${d}`);

/* Notice that here act like pre element in HTML5 */
console.log(`${a} ${b} 
    ${c} ${d}`);

/* Only \ need to be added twice to tell him that u want to use \ not escape operator */
console.log(`${a} ${b} "" '' \\ ${c} ${d}`);
console.log(`${a} ${b} "" '' \n ${c} ${d}`);
console.log(`${a} ${b} ${100 * 50} ${d}`);



/* Notice that here if we use legacy code will be looked so complicated */
let title = "Elzero";
let desc = "Elzero Web School";

let markUp = `
    <div class = "card">
        <div class = "child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    </div>
`;

document.write(markUp);