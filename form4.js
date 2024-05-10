const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, '')));

const fs = require('fs');
  
/**
 *  show on the screen the givin fildes
 *
 * @param {fName} First name.
 * @param {lName} Last name.
 * @param {Gender} gender .
 * @param {Birthday} Birthday .
 * @param {Password} Password .
 */
app.get('/ex4',function (req,res){
    const fName=req.query.fname;
    const lName=req.query.lname;
    const Gender=req.query.gender;   
    const Birthday=req.query.birthday;
    const Password=req.query.pwd;

    res.write("<!DOCTYPE html>\n");
    res.write("<html lang=\"en\">\n");
    res.write("<head>\n");
    res.write("<title>Registration</title>\n");
    res.write("<meta charset=\"UTF-8\">\n");
    res.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
    res.write("</head>\n");
    res.write("<body>\n");
    res.write("<p>"); 
    res.write(`First Name: ${fName}`);
    res.write("</p>\n");
    res.write("<p>"); 
    res.write(`Last Name: ${lName}`);
    res.write("</p>\n");
    res.write("<p>"); 
    res.write(`Gender: ${Gender}`);
    res.write("</p>\n");
    res.write("<p>"); 
    res.write(`Birthday: ${Birthday}`);
    res.write("</p>\n");
    res.write("<p>"); 
    res.write(`Password: ${Password}`);
    res.write("</p>\n");
    res.write("</body>\n");
    res.write("</html>\n");
  }); 
  
  app.listen(PORT, function() { // listens to requests
    console.log(`App listening on port ${PORT}`);
  });
  