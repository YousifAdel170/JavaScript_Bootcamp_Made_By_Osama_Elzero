/*
    Rest Parameter
        - Only one allowed [array]
        - must be last element
*/

function calc(...numbers){
    let result = 0;
    console.log(typeof numbers);
    console.log(Array.isArray(numbers));
    for(let i = 0; i < numbers.length; i++)
        result += numbers[i];
    return result;
}

console.log(calc(1,2,3,4,5,6,6,6,6,6,6,6));