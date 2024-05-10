# מגישות 
פידא רבאח 204647911
שירה סבן 316511658



const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, '')));

const fs = require('fs');
  
/**
 * on click from the form, pyramid apper on the screen
 *
 * @param {NME1} number from the form.
 * @param {temp} temp .
 */
app.get('/ex1',function (req,res){
    const NME1=req.query.num;
    let temp=1;
    res.write("<!DOCTYPE html>\n");
    res.write("<html lang=\"en\">\n");
    res.write("<head>\n");
    res.write("<title>Draw Steps</title>\n");
    res.write("<meta charset=\"UTF-8\">\n");
    res.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
    res.write("</head>\n");
    res.write("<body>\n");
    for (i=1; i<=NME1; i++){
        for(j=1;j<=temp;j++){
            res.write("<div  style=\"display:inline-block;border: 1px solid black;width:15px;\">"+j);  
            res.write("</div>")
        }
       res.write("<BR>\n");        
        temp+=1;
    }
    res.write("</body>\n");
    res.write("</html>\n");
  }); 
  
  app.listen(PORT, function() { // listens to requests
    console.log(`App listening on port ${PORT}`);
  });
  