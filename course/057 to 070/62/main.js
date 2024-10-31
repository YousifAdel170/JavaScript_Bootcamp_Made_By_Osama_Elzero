
function showInfo(userName = "Unknown", age = "Unknown", hourRate = 0, show = "Yes", ...skills){
    document.write(`<div>`)
    document.write(`<h2>Welcome, ${userName}</h2>`)
    document.write(`<p>Age: ${age}</p>`)
    document.write(`<p>Hour Rate: $ ${hourRate}</p>`)
    if(show === "Yes"){
        if(skills.length > 0){
            document.write(`<p>Skills: ${skills.join(" | ")}</p>`)
            // document.write(`<span>Skills: </span>`);
            // for(let i = 0; i < skills.length; i++){
            //     document.write(`<span>${skills[i]}</span>`)
            // }
        }
        else{
            document.write(`<p>Skills: No Skills</p>`)
        }
    }else{
        document.write(`<p>Skills Is Hidden</p>`)
    }
    document.write(`</div>`)
}

showInfo("Yousif", 22, 10, "Yes", "HTML5", "CSS3");