let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let color = ["Red", "Green", "Black"];

let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for(let i=0; i < showCount; i++){
    document.write(`<div>`);
    document.write(`<h3>[${i+1}]. ${products[i]} </h3>`);
    for(let j=0; j<color.length; j++){
        document.write(`<p>${color[j]} </p>`);
    }
    document.write(`<p>${color.join(" | ")} </p>`);
    document.write(`</div>`);
}
