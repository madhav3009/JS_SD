//Phenomenon in jS by which can access var and func before initialisation

console.log(x); //Will give undefined
var x=10;

var ans = func(); //will give 'From Func' i.e called before definition
function func(){
    const c=1000;
    console.log('From Func');
}
