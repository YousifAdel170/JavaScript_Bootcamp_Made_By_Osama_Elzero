let lengthImgs = document.getElementsByTagName("img").length;

// console.log(lengthImgs);


for(let i=0; i<lengthImgs; i++){
    if(document.images[i].hasAttribute("alt")){
        // console.log(`${document.images[i]} have attribute named alt`);
        if(document.images[i].getAttribute("alt") === ""){
            // console.log(`${document.images[i]} have EMPTY alt attribute`);
        }else{
            // console.log(`${document.images[i]} have FULL alt attribute`);
        }
        document.images[i].setAttribute("alt", "Old");
        // console.log("The attribute has been set with the  OLD VALUE");
    }else{
        // console.log(`${document.images[i]} doesn't have attribute named alt`);
        document.images[i].setAttribute("alt", "Elzero New");
        // console.log("The attribute has been set with the  ELZERO NEW VALUE");
    }
    // console.log("################");
}