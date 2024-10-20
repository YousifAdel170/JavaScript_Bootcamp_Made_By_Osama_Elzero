/* var */
/*
    1. Redeclare              => declare the variable multiple times allowed
    2. Access before declare  => shows [undefined]
    3. Variable Scope Drama   => will appear inside the window
            var aabb = 1;
                window.aabb         => will show 1
                aabb                => will show 1

*/
console.log(a);
var a = 1;
var a = 2;



/* let */
/*
    1. Redeclare => declare the variable multiple times NOT ALLOWED
    2. Access before declare  => shows [ERROR]
    3. Variable Scope Drama   => won't appear inside the window
                let aabb = 1;
                window.aabb         => won't show 
                aabb                => will show 
*/
// console.log(b);
let b = 1;
// let b = 2;
console.log(b);


/* const */
/*
    1. Redeclare => declare the variable multiple times NOT ALLOWED
    2. Access before declare  => shows [ERROR]
    3. Variable Scope Drama   => won't appear inside the window
                const  aabb = 1;
                window.aabb         => won't show 
                aabb                => will show 

*/
console.log(c);

const c = 1;
// const c = 2;
console.log(c);


