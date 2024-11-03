const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function (){
            if(myRequest.status === 200 && myRequest.readyState === 4){
                resolve(JSON.parse(myRequest.responseText));
            }else{
                reject(Error("ERROR!!! WRONG API"));
            }
        }
        myRequest.open("GET", apiLink);
        myRequest.send();
    });
}

getData("test.json").then((result) => {
    console.log(result);
    console.log(result.length);
    result.length = 5;
    for(let i=0; i<result.length; i++){
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let h3TextNode = document.createTextNode(result[i]["title"]);
        let p = document.createElement("p");
        let pTextNode = document.createTextNode(result[i]["description"]);
        h3.appendChild(h3TextNode); 
        p.appendChild(pTextNode); 
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);
    }
})