var express = require('express')
var app = express()


var bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SERVER_PORT = process.env.PORT || 3000;
const MAX_LENGTH_WORD = 10;

app.post('/getWordLengthFrequency', function (req, res) {
	console.log("post requested received with data: ");
    
    var data = req.body.data;
    
    console.log(data);

    const words = data.split(" ");

    let lengths = [];
    for (let word of words) {
        lengths.push(word.toString().length);
    }
    lengths.sort();

    let resultArr = new Array(MAX_LENGTH_WORD);
    resultArr.fill(0); 
    
    if (lengths.length >= 1 ){
      let value = lengths[0];
      let count = 1;
      for (let i=1; i<lengths.length; i++) {
        if (value == lengths[i]){
            count++;
        } else {
            resultArr[value-1] = count;
            value = lengths[i];
            console.log(value);
            count = 1;
            if (i == (lengths.length-1)){
                resultArr[value-1] = count;
            }
        }
    
      }
    } 
   
    var resultStr = "";

    for (var i = 0; i < resultArr.length; i++) {
        resultStr = resultStr + resultArr[i] + " ";
    }
  
    console.log("sending response");
    res.send(resultStr);
    res.end();
 
})

app.listen(SERVER_PORT, () => {
	console.log("Server listening on port: " + SERVER_PORT);
})