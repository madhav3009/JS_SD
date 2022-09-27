// D - Dependency Inversion Principle - It states that the high-level module must not depend on the low-level module, but they should depend on abstractions. 

// Example - TV Remote needs Battery to Work, but Brand of Battery Doesn't matter

//WRONG 
// UserService.getStudentData()
// .subscribe((res) => {
//   if (res.success) { 
//     this.date = res.date;
//     this.age = res.age;
//     this.name = res.name
//     this.role = res.name
//   }
// });


// UserService.getTeacherData()
// .subscribe((res) => {
//   if (res.success) { 
//     this.date = res.date;
//     this.age = res.age;
//     this.role = res.name
//   }
// });


//CORRECT

UserService.getStudentData()
.subscribe((res) => {
  if (res.success) { 
    setUserData(res)
  }
});

UserService.getTeacherData()
.subscribe((res) => {
  if (res.success) { 
   setUserData(res)
  }
});

function setUserData(data){
    this.date = data.date;
    this.age = data.age;
    this.name = data.name
    this.role = data.name
}



