// I - Interface Segregation Principle  = A client should never be forced to implement an interface that it doesn’t use

// Wrong, As User is seeing both menu (interfaces) even one which is not required/relevant
// const VegItems = ['Idli, Vada'];
// const NonVegItems = ['Egg, Chicken'];

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     getMenu(){
//         const items = [...VegItems,',', ...NonVegItems]
//         console.log(`Menu for User ${this.name} is`, ...items)
//     }
// }


// const userObj = new User("Madhav")
// userObj.getMenu()

// CORRECT

const VegItems = ['Idli, Vada'];
const NonVegItems = ['Egg, Chicken'];

class User{
    constructor(name, isVeg=false){
        this.name = name;
        this.isVeg = isVeg;
    }
    getMenu(){
        let items;
        if(this.isVeg){
            items = VegItems
        } else {
            items = NonVegItems
        }
        console.log(`Menu for User ${this.name} is`, ...items) 
    }
}


const userObj = new User("Madhav", true)
userObj.getMenu()
