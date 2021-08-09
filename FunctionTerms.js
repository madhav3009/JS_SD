// Function Statement
function fun(){
    console.log('I am Function Statement');
}
fun();


//Function Statement - Function is assigned to a variable  //Also func is Named Function
const funStore = function func(){
    console.log('I am function func stored in funStore variable');
}
funStore();


//annonymous Function - function not having any name
const annoyFunc = function(){
    console.log('I am Annonymous Function i.e without name');
}
annoyFunc();


//Arguments are passed whereas params are inside function definition

function add(a,b){  //a,b are params
  return a+b;
} 
const ans = add(2,3); //2,3 arguments
console.log('Sum of 2 & 3 is', ans);


//First Class functions are also called as First Class Citizens
//It's the ability of a function to be used like values; //Functon can be taken as val and passed to another function

const val = (a,b) =>{
 return a*b;
}
console.log('Multiplication func is stored in val',val(5,6));


