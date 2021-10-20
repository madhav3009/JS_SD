// When a function is passed as an argument to another function it is called Callback function.

//A function that recieves a function as a argument or returns a function is called HOF


function f1()
{
    console.log('From Func f1');
}

function f2(f1){       //f2 is Higher order function, f1 is callback function
    console.log('From Func f2');
    f1();
}

function f3(){
    f2(f1);
}

f3();


