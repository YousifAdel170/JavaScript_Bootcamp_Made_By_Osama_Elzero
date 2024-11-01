
/*
    Object Meta Data And Descriptor
    - writable
    - enumerable
    - configurable [Cannot Delete Or Reconfigure]
*/


const myObject = {
    a: 1,
    b: 2,
};
console.log(myObject)
console.log("#".repeat(50));
console.log("#".repeat(50));

/* writable */
    /* writable: true [chould change the value of the c propert] */
    Object.defineProperty(myObject, "c", {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 3,
    });
    for(let i in myObject){
        console.log(`${i}`);
    }
    myObject.c = 100;
    console.log(myObject);
    console.log("#".repeat(50));


    /* writable: false [can't change the value of the c propert] */
    Object.defineProperty(myObject, "c", {
        writable: false,
        enumerable: true,
        configurable: true,
        value: 3,
    });
    for(let i in myObject){
        console.log(`${i}`);
    }
    myObject.c = 100;
    console.log(myObject);
    console.log("#".repeat(50));
    console.log("#".repeat(50));


/* enumberable */
    /* enumberable: false [c property can't be appaer at the loop]
            notice!!! => the property not deleted
    */
    Object.defineProperty(myObject, "c", {
        writable: true,
        enumerable: false,
        configurable: true,
        value: 3,
    });
    for(let i in myObject){
        console.log(`${i}`);
    }
    myObject.c = 100;
    console.log(myObject);
    console.log("#".repeat(50));


    /* enumberable: true [c property can appaer at the loop]   */
        Object.defineProperty(myObject, "c", {
        writable: false,
        enumerable: true,
        configurable: true,
        value: 3,
    });
    for(let i in myObject){
        console.log(`${i}`);
    }
    myObject.c = 100;
    console.log(myObject);
    console.log("#".repeat(50));
    console.log("#".repeat(50));

/* configurable */
    /* configurable: true [c property [settings (writable, enumberable, configurable) can be changed]] */
    Object.defineProperty(myObject, "c", {
    writable: true,
        enumerable: false,
        configurable: true,
        value: 3,
    });
    for(let i in myObject){
        console.log(`${i}`);
    }
    myObject.c = 100;
    console.log(myObject);
    console.log("#".repeat(50));
    
            
    /* configurable: false [c property [settings (writable, enumberable, configurable) can't be changed]] */
    Object.defineProperty(myObject, "c", {
        writable: false,
        enumerable: true,
        configurable: false,
        value: 3,
    });
    for(let i in myObject){
        console.log(`${i}`);
    }
    myObject.c = 100;
    console.log(myObject);
    console.log("#".repeat(50));
    console.log("#".repeat(50));


// delete the propety
console.log(delete myObject.c);     // notice here false because configurable: false [change any thing]
console.log(delete myObject.b);     // notice here true [means that b property has been deleted]
console.log(myObject);
