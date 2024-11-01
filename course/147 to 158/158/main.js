/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
    a: 1,
    b: 2,
};

Object.defineProperties(myObject, {
    c: {
        configurable: true,
        value: 3,
    },
    d: {
        configurable: true,
        value: 4,
    },
    e: {
        configurable: true,
        value: 5,
    },
    f: {
        configurable: true,
        value: 6,
    },
});

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
console.log(Object.getOwnPropertyDescriptors(myObject));