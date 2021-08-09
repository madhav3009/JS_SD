// Closure is nothing but a function along with it's lexical environment
const funcA = () =>{
   var a=10;
   console.log('in FuncA');

   const funcB = () =>{
    console.log('in FuncB');
    console.log(a);
    }

    return funcB;
}

const ans = funcA(); // this will remeer the lexical scope of funcA
console.log('ans',ans);
ans(); // when this is called, a is not present but funcB remeber it's lexical scope and print's the vale


//---------------------------------//
  


console.log('---------------------------------');


const fA = (k) =>{
    console.log('From fA');
    const fB = () =>{
        var j=299;
        console.log('i & j & k is', i , j,k );
        console.log('From fB');
    }
    let i=199;
    return fB;
}

const closure = fA('Heyy');
closure()



