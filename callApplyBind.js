const e1 ={name:'madhav', age:22}

//CALL -> Invokes func with given 'this' value, arguments are provided one by one 
function invite(type,greeting, msg){
      console.log(`${type} ${greeting} ${this.name}, ${msg} is ${this.age}`)
}

invite.call(e1,'CALL METHOD - ','Hello','your age');

// ----------------------------- //

//APPLY -> Invokes func with given 'this' value, arguments are provided in form of Array


invite.apply(e1,['APPLY METHOD - ','Hello','your age']);


// ----------------------------- //

//BIND -> Returns a new function, allows to pass any number of arguments
var inviteE1 = invite.bind(e1);
inviteE1('BIND METHOD -', 'Hello','your age')


