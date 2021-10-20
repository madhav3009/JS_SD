//A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete 

//bahadurgarh,greaternoida,haridwar,mohali,noida,


function add(a,b){
    return a+b;
}

function avg(sum){
    return sum/2;
}

const sum = add(4,6);
console.log('Sum is',sum);

const ans = avg(sum); //function add stored in sum is passed as arg to function avg

console.log('Avg is',ans);

console.log('New AVERAGE IS',avg(add(15,15)))