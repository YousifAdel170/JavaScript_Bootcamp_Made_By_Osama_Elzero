let points = 10;

points += ++points.toString().length;
console.log(points); // 13

points -= points.toString().length + ++points.toString().length;
console.log(points); // 8;