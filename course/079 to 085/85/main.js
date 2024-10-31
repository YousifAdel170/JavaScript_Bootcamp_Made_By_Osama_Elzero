let obj1 = {
    prop1: 1,
    meth1: function(){
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function(){
        return this.prop2;
    },
};

let targetObject = {
    prop1: 100,
    prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1);

console.log(finalObject);
finalObject.prop3 = 70;
finalObject.prop1 = 140;
console.log(finalObject);

let newObject = Object.assign({}, obj1, {prop4: 4, prop5: 5});
console.log(newObject);
