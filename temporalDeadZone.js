// Temporal Dead Zone is a behaviour in JS when trying to access const/let before declaring it

console.log(a); //ref Err
console.log(b); // ''
console.log(c); // undefined

let a=10;
const b=20;
var c=30;

