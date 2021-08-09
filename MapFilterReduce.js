//Map, Filter, Reduce are HOF 

//Map->
//Filter->
//Reduce->

const users = [
    {firstName:"Madhav", lastName:"pradhan", "age": 22},
    {firstName:"Raghav", lastName:"pradhan", "age": 20},
    {firstName:"Harpal", lastName:"pradhan", "age": 11},
    {firstName:"Gaurav", lastName:"pradhan", "age": 22  },
    {firstName:"Rohit", lastName:"pradhan", "age": 7},
]

//Maps the users arr
console.log('-------MAP-----------');
users.map(user => console.log(user));


console.log('-------FILTER-----------');

function isValid(age)
{return age>18;}

function ValidUser()
{
    return users.filter(user=> isValid(user.age))
}

console.log(ValidUser());

console.log('ANOTHER FILTER');
const eligible = users.filter((x) => x.age> 18).map( (a)=> a.firstName);
console.log(eligible);


console.log('-----REDUCE----------');

//distinct age with their count
const output = users.reduce(function(acc,curr){
    if(acc[curr.age]){ acc[curr.age] = acc[curr.age]++;}
    else
    acc[curr.age]=1;

    return acc;

},{}) //{} initial value

console.log('Distinct', output);