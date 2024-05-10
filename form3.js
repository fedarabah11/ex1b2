const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname,'')));
app.use(fileUpload());

const fs = require('fs');
const directoryPath = path.join(__dirname, 'public/img/');

/**
 *  upload the files to dir
 *
 * @param {sampleFile} file name.
 * @param {uploadPath} file .upload Path
 */

app.post('/upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if(req.query.Clear)
  {
    fs.unlinkSync(directoryPath, function (err, files) {
      try{
 
       files.forEach(function (file) {
         console.log(directoryPath + file);
         });
 
      }
      catch(err) {
       console.error(err)
      }
 
 });
    
  }
  
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }
  //console.log('req.files >>>', req.files); // eslint-disable-line
  sampleFile = req.files.sampleFile;
 
  uploadPath = __dirname + '/public/'+'/img/' + sampleFile.name;

  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    //res.send('File uploaded to ' + uploadPath);
 
   
  });

  

  

});

/**
 *  on click from the form Show Img on the screen.
 *
 * @param {directoryPath} file .upload Path
 */
app.get('/ShowImg',function (req,res){

    fs.readdir(directoryPath, function (err, files) {
        //handling error    
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        res.write("<!DOCTYPE html>\n");
        res.write("<html lang=\"en\">\n");
        res.write("<head>\n");
        res.write("<title>Simple Album</title>\n");
        res.write("<meta charset=\"UTF-8\">\n");
        res.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
        res.write("</head>\n");
        res.write("<body>\n");
        res.write("<div>\n"); 
        //listing all files using forEach
        files.forEach(function (file) {
        let p =directoryPath+file;
        console.log(p);
       res.write(`<img src=\"${p}\" alt=\"img\" style=\"width:70%; display:block; margin-left:auto\;margin-right: auto;">`);
       res.write("<BR>"); 
        });
        res.write("</div>");
        res.write("</body>\n");
        res.write("</html>\n");
    });

});


  app.listen(PORT, function() { // listens to requests
    console.log(`App listening on port ${PORT}`);
  });
  