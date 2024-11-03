const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function(){
            if(this.readyState === 4 && this.status === 200){
                resolve(JSON.parse(this.responseText));
            }else{
                reject(Error("ERROR!!! API is Wrong"));
            }
        };
        myRequest.open("GET", apiLink);
        myRequest.send();
    })
}

// getData("https://api.github.com/users/YousifAdel170/repos").then((result) => {
getData("https://api.github.com/users/YousifAde_ERRROR_l170/repos").then((result) => {
    result.length = 6;
    return result;
}).then((result) => console.log(result[0].name)).catch((reject) => console.log(reject))

