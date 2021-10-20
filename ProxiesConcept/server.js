const express = require('express');
const app = express();
const PORT = 3003;

app.listen(PORT, (req,res)=>{
    console.log(`App running on Port ${PORT}`);
  })
    
app.get('/hello',(req,res)=>{
    console.log(req.headers);
    res.send(`Hello ON PORT ${PORT} \n`);
})
