// nodejs is a runtime environment to build up apps
// express is a popular application framework 

//import express library
const express = require('express');

//create an express application, whenever uses this function,
// it returns an instance of express application, this 'app' will
// be used to define routes and other configurations.
const app = express();
const fs = require('fs').promises;

app.get('/', async (req, res) => {
    res.type('html')
    const content = await fs.readFile('./assets/html/index.html');
    res.send(content);
  });
  
app.get('/styles.css', async (req, res) => {
    res.type('css')
    const content = await fs.readFile('./assets/css/styles.css');
    res.send(content);
 });


app.get('/index.js', async(req, res) => {
    res.type('js');
    const content = await fs.readFile('./assets/js/index.js');
    res.send(content);
})

app.get('/api/current_time', (req, res) => {
  res.type('text');
  res.send(new Date());
})

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});


// steps:
//1. write the code, save in app.js
//2. npm init
//3. npm install express
//4. node app.js



//Lecture 2
//fs(file system) library, help not to write html/css here!
// file system access on the server side
// asyn： nodejs could do other stuff while finish