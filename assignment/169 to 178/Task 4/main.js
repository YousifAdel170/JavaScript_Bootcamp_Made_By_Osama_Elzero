let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();

myRequest.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        console.log(myRequest.responseText);
        let myJsObject = JSON.parse(myRequest.responseText);
        for(let i=0; i<myJsObject.length; i++){
            let divCreated  = document.createElement("div");
            let headCreated = document.createElement("h2");
            let headTextNode = document.createTextNode(myJsObject[i]["title"]);
            let firstPCreated = document.createElement("p");
            let firstPTextNode = document.createTextNode(myJsObject[i]["body"]);
            let secondPCreated = document.createElement("p");
            let secondPTextNode = document.createTextNode(`Author: ${myJsObject[i]["author"]}`);
            let thirdPCreated = document.createElement("p");
            let thirdPTextNode = document.createTextNode(`Category: ${myJsObject[i]["category"]}`);


            divCreated.appendChild(headCreated);
            headCreated.appendChild(headTextNode);

            firstPCreated.appendChild(firstPTextNode);
            divCreated.appendChild(firstPCreated);

            secondPCreated.appendChild(secondPTextNode);
            divCreated.appendChild(secondPCreated);

            thirdPCreated.appendChild(thirdPTextNode);
            divCreated.appendChild(thirdPCreated);

            document.body.appendChild(divCreated);

        }
    }
}