const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, '')));
app.use(fileUpload());

const fs = require('fs');
/**
 *  upload the files to dir, show on the screen the  text from the file.
 *
 * @param {sampleFile} file name.
 * @param {uploadPath} file .upload Path
 */

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;
  let retxt;
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }
  //console.log('req.files >>>', req.files); // eslint-disable-line
  sampleFile = req.files.sampleFile;

  uploadPath = __dirname + '/public/' + sampleFile.name;

  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

  });

  fs.readFile(uploadPath,'utf8',function(error, txtString) {
    if(error) throw err; 
    console.log(txtString.toString());
    retxt=txtString.toString();
    res.write("<!DOCTYPE html>\n");
    res.write("<html lang=\"en\">\n");
    res.write("<head>\n");
    res.write("<title>Poem Presenter</title>\n");
    res.write("<meta charset=\"UTF-8\">\n");
    res.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
    res.write("</head>\n");
    res.write("<body>\n");
    res.write("<div>\n"); 
    let index =1;
    retxt.split(/\r?\n/).forEach(function(line) {
      if(index==1){
        res.write("<h1>"+line+"</h1>"); 
      }
      else if(index==2){
        res.write("<h2>"+line+"</h2>"); 
      }
      else{

        res.write(line);  
      }
      res.write("<br>");
      index++;
    });
    res.write("</div>");
    res.write("</body>\n");
    res.write("</html>\n");
  });

});

  app.listen(PORT, function() { // listens to requests
    console.log(`App listening on port ${PORT}`);
  });
  