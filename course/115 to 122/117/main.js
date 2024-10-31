let book = "Video", video = "Book";

/* Swapping using Temp method */
// let temp = book;
// book = video;
// video = temp;

// console.log(book);
// console.log(video);

/* Swapping using destrucring method */
[book, video] = [video, book];
console.log(book);
console.log(video);
