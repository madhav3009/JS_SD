// L - Liskov Substitution Principle =  Every subclass or derived class should be substitutable for their base or parent class.


//WRONG
// class Bird{
//     fly(){
//         console.log('I am Flying')
//     }
// }

// class Eagle extends Bird{ //Eagle can Dive as well as Fly, it's fine
//     dive(){
//         console.log('I am Diving')
//     }
// }


// class Penguin extends Bird{ //Penguin can't Fly, So the point is our base class should be more genric 
//     swim(){
//         console.log('I am Swiming')
//     }
// }

//CORRECT

class Bird{
    layEggs(){
        console.log('I am laying eggs')
    }
}

class Eagle extends Bird{ //Eagle can Dive as well as lay eggs
    dive(){
        console.log('I am Diving')
    }
}


class Penguin extends Bird{ //Penguin can Swim as well as lay eggs
    swim(){
        console.log('I am Swiming')
    }
}


const p = new Penguin;
console.log(p.layEggs(), p.swim())




