// O - Open-Closed Principle  = Objects or entities should be open for extension but closed for modification. 

const ROLES = ['ADMIN','TEACHER'];

const checkRole = (user) => {
    return ROLES.includes(user)
}

console.log("IS ADMIN VALID", checkRole('ADMIN'))

console.log("IS STUDENT VALID", checkRole('STUDENT'))
