// S - Single Responsiblity Principle = A class should have one and only one reason to change, meaning that a class should have only one job.

// WRONG 
// validateAndCreateUser is validating as well as CreatingUser, whereas there should be 2 func, one to validate and another to create.

const validateAndCreateUser = (payload) =>{
    const isEligible = payload.age>18;
    if(isEligible){
        payload['votingLocation'] = "TEST"
        payload['votingDate'] = "123"
    }

    return payload;
}


const payload = {
    name:"Madhav",
    age: 20
}



