let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
console.log("JSON Object Content Here");
console.log(myRequest);

myRequest.onloadend = function(){
    console.log("Data Loaded");
}

myRequest.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        console.log(this.responseText);
    }
}
// Needed Output

// "JSON Object Content Here"
// "Data Loaded"