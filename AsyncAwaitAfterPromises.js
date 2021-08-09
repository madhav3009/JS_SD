//Async Await doesn't  help in Producing Promises But makes easier to Consume our Promises 
// Async Function has to return Promise

const Pobj = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       const nums = [1,2,3,4,5];
       resolve(nums);
    },2000)
});

const show = (rollNum) => {
    return new Promise((resolve,reject)=>{
        setTimeout((rollNum)=>{
            const data = {
                name: 'Madhav',
                age: 22,
                roll:rollNum
            }
            resolve(data);
          },5000, rollNum)  
    })
}

async function fun(){
  try{
    const val = await Pobj
    console.log('ayaKya',val);

    const FinalAns = await show(val[1]);
    return FinalAns;
  } catch(err) {
  console.log('errrror')
  } finally {
  console.log('end')
  }
}

fun().then((answer)=>{
    console.log('ANSWER:', answer);
}).catch();
