// IIFE Immediately Invoked Function Expression)
//Advantage of IIFE -> 
    // > To obtain data privacy, variables declared inside it can't be used outside
 ( 
     function(){
         var a=10;
       console.log('hey, from IIFE will work without calling');
     }
 )();


   console.log(a);
  //Will throw err as 'a is not defined'
