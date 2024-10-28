console.log(location);
console.log(location.href);

// location.href = "https://google.com";
// location.href = "mailto:ya842245@gmail.com";

console.log(location.host);
console.log(location.hostname);

// location.hostname = "google.com"
console.log(location.protocol);

// http://127.0.0.1:5500/course/102%20to%20114/106/#sec01
console.log(location.hash);   // shows the hash [sec01]

// location.reload(); // Keep reloading

// Remove the replaced page from the session history 
// location.replace("https://google.com");  

// Don't remove the replaced page from the session history
// location.assign("https://google.com");