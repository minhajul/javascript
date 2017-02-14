// Write a function called "addArrayProperty".
//
// Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.
//
// var myObj = {};
// var myArray = [1, 3];
// addArrayProperty(myObj, 'myProperty', myArray);
// console.log(myObj.myProperty); // --> [1, 3]


function addArrayProperty(obj, key, arr) {
   obj[key] = arr;
   return obj;
}

let myObj = {},
    myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty);
