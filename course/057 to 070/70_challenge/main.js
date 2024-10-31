/*
  Function Arrow Challenges
*/

/* Challenge 1 */
// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]
    
    // Regular Function
// let names = function (...arr) {
//     return `String [${arr.join("], [")}] => Done !`;
// };
    // Arrow Function
let names = (...arr) => `String [${arr.join("], [")}] => Done !` ;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
  // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
  
  /* ================================= */
  
/* Challenge 2 */
  // [1] Replace ??? In Return Statement To Get The Output
  // [2] Create The Same Function With Regular Syntax
  // [3] Use Array Inside The Arguments To Get The Output
  
      //  Arrow Function
  let myNumbers = [20, 50, 10, 60];
  // let calc = (one, two, ...nums) => one + two + +nums;
  //               10   50                20
  // console.log(calc(10, myNumbers[+true], myNumbers[+false])); // 80
  // one is 10 , two is 50, +nums is 20 => [10 + 50 + 20] = 80 

      // Regular Function
  let calc = function(one, two, ...nums) { 
    // console.log(+nums);
    return one + two + +nums;
  };
  //               10   50                20
  console.log(calc(10, myNumbers[+true], myNumbers[+false])); // 80