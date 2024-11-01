let t0 = performance.now().toFixed(0);
for (let i = 1; i <= 99999; i++)  console.log(`${i}`);
t0  = performance.now().toFixed(0) - t0;
console.log(`Look Took ${(t0)} Milliseconds.`);
// Needed Output

// "Loop Took 1921 Milliseconds."