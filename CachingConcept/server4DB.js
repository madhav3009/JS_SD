const express = require('express');
const app = express();
const database = require('./dummyDB');

const PORT = 9999;
const Cache ={};

//On this URL, for the first time DB will be caled annd content will be returned in 5sec, and stored in Cache
app.get('/usingCache/indexmi.html', (req,res)=>{
   //if it's present in Cache simply retuned
    if('indexmi.html' in  Cache){
      res.send(Cache['indexmi.html']); 
      return;
    }
    //else call is made to DB and stored in Cache
  database.get('indexmi.html', page =>{
    Cache['indexmi.html'] = page;
      res.send(page);
      return;
  })
})

app.listen(PORT,()=>{
    console.log(`Server Running on PORT : ${PORT}`)
});

