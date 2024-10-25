let available = true;
let user = {
    theName: "Yousif",
    theAge: 22,
    skills: ["C", "HTML", "CSS", "ROS", "Embedded C"],
    available: false,
    addresses: {
        ksa: "Riyadh",
        egypt: {
            one: "Cairo",
            two: "Giza",
        },
    },

    checkAv: function(){
        // Notice here if i check if availabe means i'm checking the global variable
        if(user.available === true) return `Free To Work`;  // here i'm checking the variable inside the object
        else    return `Not Free`;
    }
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.skills[3]);
console.log(user.addresses);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt["one"]);
console.log(user.checkAv());