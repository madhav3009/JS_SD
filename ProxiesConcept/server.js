const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, (req,res)=>{
    console.log(`App running on Port ${PORT}`);
  })
    
app.get('/hello',(req,res)=>{
    console.log(req.headers);
    res.send(`Hello ON PORT ${PORT} \n`);
})
