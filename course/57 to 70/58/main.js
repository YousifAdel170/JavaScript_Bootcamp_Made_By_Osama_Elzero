function sayHello(userName, userAge){
    if(userAge < 20)    console.log(`App isn't suitable for you.`);
    else                console.log(`Hello ${userName}, Your Age is ${userAge}.`);
}

sayHello("Yousif", 22);
sayHello("Yousif");
sayHello("Yousif", 18);

function generateYear(start, end, exclude){
    for(let i = start; i <= end; i++){
        if(i === exclude)   continue;
        console.log(i);
    }
}

generateYear(2002, 2024, 2020);