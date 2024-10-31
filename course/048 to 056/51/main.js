let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let color = ["Red", "Green", "Black"];

console.log("Print until pen [pen not included]");
for(let i = 0; i < products.length; i++){
    if(products[i] === "Pen")   break;
    console.log(products[i]);
}

console.log("\nPrint until pen [pen included]");
for(let i = 0; i < products.length; i++){
    console.log(products[i]);
    if(products[i] === "Pen")   break;
}

products = ["Keyboard", "Mouse", 1, 2, "Pen", "Pad", 30, 40,"Monitor"];

console.log("\nPrint All The array without NUMBERS:");
for(let i = 0; i < products.length; i++){
    if(typeof products[i] === "number")   continue;
    console.log(products[i]);
}
console.log("\nPrint all the features using LABEL:");
/* Label [JS Feature] */
mainLoop: for(let i = 0; i < products.length; i++){
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`)
    console.log("#".repeat(15));
    console.log(` - Colors: `);
    nestedLoop: for(let j = 0; j < color.length; j++){
        console.log(`  ${j+1}- ${color[j]}`)
        if(color[j] === "Green")    break;
        // Equal to  if(color[j] === "Green")    break nestedLoop;
    }
}

console.log("\nBreak The Main Loop:");
/* Label [JS Feature] */
mainLoop: for(let i = 0; i < products.length; i++){
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`)
    console.log("#".repeat(15));
    console.log(` - Colors: `);
    nestedLoop: for(let j = 0; j < color.length; j++){
        console.log(`  ${j+1}- ${color[j]}`)
        if(color[j] === "Green")    break mainLoop;
    }
}