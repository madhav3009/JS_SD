//NOTES: Promises are basically takes 2 param in executor function, i.e Resolve and Reject,
// If promise is Fulfilled then Resolve else Reject
// In order to create a new Promise => const PobjName = new Promise((resolve,reject)=>{})
// Pobject data can either be resolved or rejected
// Resolved data can be accessed by Using . then()
// Rejected can be accessd by using .catch()
// Another Func can e called from .then and that function will 'return' new Promise
// Returned promise can be return as function from first .then and can be handled in next .then


//Creating Promise obj, that resolves roll Num after sec (Promise PRODUCER)
const Pobj = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const rollNos = [1,2,3,4,5];
    resolve(rollNos);
  },3000)  
})

//returning Promise after 5sec by making object of given rollNum  (PROMISE CONSUMER)
const showName = (rollNum) => {
    return new Promise((resolve,reject)=>{
      setTimeout((rollNum)=>{
        const data = {
            name: 'Madhav',
            age: 22,
            roll:rollNum
        }
        resolve(data);
      },5000, rollNum)  
    });
}

// Access rollNums from Pobj, and returns function which returns promise and handled in 2nd .then
Pobj.then((rollNos)=>{
   console.log(rollNos);
   return showName(rollNos[1]);
}).then((data)=>{
    console.log(`Asked Roll Num is ${data.roll} having Name ${data.name} and age ${data.age}`)
}).catch(()=>{
    console.log('In case Error aajaye')
})


//Promise Chaining

const newPromise = new Promise(
  function(resolve,reject){
    setTimeout(()=>resolve(1),1000)
  }
).then(function(result){
  console.log('result is', result)
  return result*2;
}).then(function(result){
  console.log('result 2 is', result)
  return result*2;
}).catch((err)=>{
  console.log('err is',err)
})


//Promises.all => Takes an array of Promises as an input and it gets resolved when either
// All Of the Promises gets resolved
// Or any one of the Promises get rejected

Promise.all([Pobj,newPromise])
.then((result)=>{console.log('Done')})
.catch((err)=>{console.log(err)})



//Promise.race => Returns promise Instance which is firstly resolved / rejected

const p1 = new Promise(function(resolve,reject){
  setTimeout(resolve, 500, 'p1');
})
const p2 = new Promise(function(resolve,reject){
  setTimeout(resolve, 100, 'p2');
})

Promise.race([p1,p2])
.then((resolvedResult)=>console.log('Race result', resolvedResult))
.catch((err)=>console.log(err))
