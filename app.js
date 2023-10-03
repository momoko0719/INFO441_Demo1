// nodejs is a runtime environment to build up apps
// express is a popular application framework 

//import express library
const express = require('express');

//create an express application, whenever uses this function,
// it returns an instance of express application, this 'app' will
// be used to define routes and other configurations.
const app = express();

app.get('/', (req, res) => {
    res.type('html')
    res.send('<html><head>' + 
      '<link rel="stylesheet" href="styles.css">' +
      '</head><body><h1>Hello World!</h1></body></html>')
  })
  
  app.get('/styles.css', (req, res) => {
      res.type('text/css')
      res.send('h1 {background-color: red;}')
  })
  


app.listen(3000, () => {
   console.log('Server is running on port 3000');
});


// steps:
//1. write the code, save in app.js
//2. npm init
//3. npm install express
//4. node app.js