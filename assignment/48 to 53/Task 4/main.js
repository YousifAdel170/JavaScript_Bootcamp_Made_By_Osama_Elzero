let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
    if(index < 5)   break;
    index -= jump;
}

// Output
// 10
// 8
// 6
// 4