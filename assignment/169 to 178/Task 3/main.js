let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        console.log(this.responseText);
        let myJsObject = JSON.parse(this.responseText);
        console.log(myJsObject);
        for(let i=0; i<myJsObject.length; i++){
            myJsObject[i]["category"] = "All";
        }
        let myJSON = JSON.stringify(myJsObject);
        console.log(myJSON);
    }
}