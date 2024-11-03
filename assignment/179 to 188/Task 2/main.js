async function getData(apiLink){
    try{
        let myData = await fetch(apiLink);
        let objects= await myData.json();
        // console.log(objects);            // test
        objects.length = 5;    
        // console.log(objects);            // test
        for(let i=0; i<objects.length; i++){
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let h3TextNode = document.createTextNode(objects[i]["title"]);
            let p = document.createElement("p");
            let pTextNode = document.createTextNode(objects[i]["description"]);
            h3.appendChild(h3TextNode); 
            p.appendChild(pTextNode); 
            div.appendChild(h3);
            div.appendChild(p);
            document.body.appendChild(div);
        }
    }catch{
        console.log(Error("ERROR!!! WRONG API"));
    }
}
getData("test.json");