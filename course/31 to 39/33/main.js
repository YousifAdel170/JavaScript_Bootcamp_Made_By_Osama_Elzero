let price = 100, discount = true;
let discountAmount = 30, country = "KSA";

if(discount === true){
    price -= discountAmount;
}else if(country === "Egypt"){
    price -= 40;
}else if(country === "Syria"){
    price -= 50;
}else{
    price -= 10;
}

console.log(price);