/* m npm run start se command ko run karenge
#2 package.json se file ko run karne ke liye new script commands ko bana sakte hain ham jaise "Run " , "Start" , "Dev" so on .. isse jab ham "npm run start" run karenge command wahi chalegi "node index.js". Output wahi aayega but jab ham ise server par lekar jayenge to fayeda degi.

#3 Backend ke liye Express sabse jyda jaruri hai Let's Learn It. --> */


require('dotenv').config()

console.log("This is Frist step to backend");

const express = require('express') // which style are you choosing , common or import
// import express from 'express'; // this is import style of expressjs


const app = express() // using express we have created a var app , it is a powerful variable such that we can use numbers of methods like app./ 
const PORT = 4000 // like USB Port in computer we have 65,535 Virtuals Ports among these some are free to use

app.get('/', (req, res) => {
  res.send(`Hello World! This is port no: ${PORT} `) // ## Each time we need to update server// here in app.get if we get request 'req' in home route "/" we give responce 'res' ->  "Hello world!".
}) 
app.get('/twitter', (req, res)=>{ // This is a call back fn we also can use another type of fn expcept arrow fn , It pass parameter request and response and send responce

  res.send('veerrandhir@gmail.com')
})
console.log("hey veer this is a server that you have created it always keeps on running");

app.get('/login', (req , res)=>{
    res.send('Is login True ' )
})

app.get( '/youtube', (req , res)=>{
    res.send('<h1>Hello I am under H2 tag can you see me </h2>')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
  console.log('Node (or more formally Node.js) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. The runtime is intended for use outside of a browser context (i.e. running directly on a computer or server OS). ');
  
})
