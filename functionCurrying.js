// Function Currying is taking a function with multiple arguments
// and turning into a seq of function with only a single argument.


multipleArgFunc = (a,b,c)=> a + b + c;
console.log(multipleArgFunc(2,5,3));


curringFunc = a => b => c => a+b+c;
console.log(curringFunc(2)); //returns func: b=>c=>2+b+c
console.log(curringFunc(2)(5)); //returns func: c=>7+c
console.log(curringFunc(2)(5)(3)); //returns number 10

