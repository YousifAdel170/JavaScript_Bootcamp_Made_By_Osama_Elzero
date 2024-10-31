let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let color = ["Red", "Green", "Black"];

let models = [2020, 2021];

for(let i = 0; i < products.length; i++){
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`)
    console.log("#".repeat(15));
    console.log(` - Colors: `);
    for(let j = 0; j < color.length; j++){
        console.log(`  ${j+1}- ${color[j]}`)
    }
    console.log(` - Models: `);
    for(let j = 0; j < models.length; j++){
        console.log(`  ${j+1}- ${models[j]}`)
   }
}