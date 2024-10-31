let st = "Elzero Web School";

if((st.indexOf('e') + st.indexOf('r').toString() ) === "34")  console.log("Good");

// W position may change
if( (st.charAt(st.indexOf("W")).toLowerCase()) === "w")   console.log("Good");

if(typeof +st !== "string")   console.log("Good");


if(typeof +st === "number")   console.log("Good");

if((st.substring(0, 6).repeat(2)) === "ElzeroElzero")   console.log("Good");