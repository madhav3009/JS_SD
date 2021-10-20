// generator function are similar to functon but it can be stopped at anywhere & can be excetuted from that point only 
// by using .next() function
// it returns value, documentdone becomes true when function is completed yes done remains  false

function * countTill5(){
    let num =0;
    while(num<5){
        yield num++;
    }
}


const val = countTill5();
console.log(val.next());
console.log(val.next());
console.log(val.next());
console.log(val.next());
console.log(val.next());
console.log(val.next());
console.log(val.next());