/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/
let myRequest = new XMLHttpRequest();

myRequest.open("GET", "test.json");     // could add [text file]
// myRequest.open("GET", "text.txt");     // could add [text file]
myRequest.send();

// console.log(myRequest);

myRequest.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        // console.log(myRequest.responseText);    
        let myJsObject = JSON.parse(myRequest.responseText);
        console.log(myJsObject);
        for(let i=0; i<myJsObject.length; i++){
            let div = document.createElement("div");
            let repoName = document.createTextNode(myJsObject[i].name);
            div.appendChild(repoName);
            document.body.appendChild(div);
        }
    }
}
