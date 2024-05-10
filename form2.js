const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, '')));

const fs = require('fs');
const { range } = require('express/lib/request');
  

/**
 * on click from the form, text apper on the screen on dif size and color
 *
 * @param {text1} text from the form.
 * @param {size} size . of the font
 * @param {r} color . of the text
 * @param {g} color . of the text
 * @param {b} color . of the text
 */

app.get('/ex2',function (req,res){
    const text1=req.query.ftext;
    let rText=text1;
    res.write("<!DOCTYPE html>\n");
    res.write("<html lang=\"en\">\n");
    res.write("<head>\n");
    res.write("<title>Colorful Lines</title>\n");
    res.write("<meta charset=\"UTF-8\">\n");
    res.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
    res.write("</head>\n");
    res.write("<body>\n");
  
    for (i=1; i<=12; i++){
      let size = 10+i;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    res.write(`<p style=\"font-size:${size}px;color:rgb(${r},${g},${b});\">`); 
    res.write(`${rText}`);
    res.write("</p>\n");
    }
    res.write("</body>\n");
    res.write("</html>\n");
  }); 
  
  app.listen(PORT, function() { // listens to requests
    console.log(`App listening on port ${PORT}`);
  });
  