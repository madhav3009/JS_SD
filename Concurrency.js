//JavaScript has a concurrency model based on an event loop, which is responsible for executing the code,
//Event Loop simply its between the Call stack and CallBack Queue, and loads process in CS when it's empty

//But we can see anomolies when our main thread is blocked

//Example setTimeout is for 5 sec, but it's executed after that due to blocked main thread

console.log('START');

setTimeout(()=>{
   console.log('Timer Ends after 5 seconds');
}, 5000);

console.log('END');

const startingTime = new Date().getTime();
let endingTime = new Date().getTime();
while(endingTime < startingTime + 10000)
{
    endingTime = new Date().getTime()
}

console.log('Main Thread is Now Unblocke after 10 sec');


/**OUTPUT WILL BE
    START
    END
    AFTER 10 SEC-> MAIN THREAD IS UNBLOCKED (MEANWHILE AFTER 5 SEC TIMEOUT GETS COPLETED
    TIMER ENDS 5 SEC (ALTHOUGH IT WAS COMPLETED AFTER 5 EC BUT AS MAIN THREAD WAS BLOCKED IT'S SHOWN ONCE mt IS UNBLOCKED)
** */

