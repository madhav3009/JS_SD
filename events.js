// const express = require('express');
// const app = express();

// const events = require('events');
// const eventEmiiter = new events();

// app.listen(3008, ()=>{
//     console.log(`Started on 3008`);
// })


// eventEmiiter.on('handleLogin', ()=>{
//     console.log('Evente handleLogin started')
// })

// eventEmiiter.emit('handleLogin');


// const express = require('express')
// const app = express()
// const axios = require('axios')

// axios.post('https://whatever.com/todos', {
//   todo: 'Buy the milk'
// })

// app.use(
//   express.urlencoded({
//     extended: true
//   })
// )

// app.use(express.json())

// app.post('/todos', (req, res) => {
//   console.log(req.body.todo)
// })


// const fs = require('fs');


// fs.readFile('test.csv','utf8',(data,err)=>{
//     if(err){console.log(err);}
//     else fs.appendFile('test.csv','madhavvv')
// })


// const ans =fs.readFileSync('test.csv','utf8')
// console.log('ans is', ans);

// const http = require('http')

const express = require('express');
const app = express();


app.listen(3001,()=>{
    console.log('running on 3001')
})

const fs= require('fs');
const { Stream } = require('stream');

const func = () => {
 const stream = fs.createReadStream('test.csv', 'utf8', (data)=>{
 stream.pipe(data);
})
}

func();