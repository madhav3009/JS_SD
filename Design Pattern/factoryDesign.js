// Factory Design Pattern - It is a Creational DP that Allows object creation in centeralised location

// Consider we have 2 types of employes for which we want to create objects, instead of creating sepeately our factory will do the job

function Developer(name){
  this.name = name;
  this.type = "Developer";
}

function Tester(name){
    this.name = name;
    this.type = "QA";
}

function createEmployeFactory(name,type){
   switch(type){
       case 1: return new Developer(name); 
       case 2: return new Tester(name);      
   }
}


const employes = []
employes.push(createEmployeFactory("Madhav", 1));
employes.push(createEmployeFactory("Sheetal", 2));
employes.push(createEmployeFactory("Manoj", 1));

printEmployeesData = () => {
employes.forEach(emp=>{
    console.log('I am ' + emp.name + ', and I am a ' + emp.type)
})
}


printEmployeesData();