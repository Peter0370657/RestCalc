var express = require("express");
var app = new express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 


app.get("/", function (req, res) {
    // __dirname = The name of the directory that the currently executing script resides in. https://nodejs.org/docs/latest/api/globals.html#globals_dirname
    res.sendFile( __dirname + '/index.html');
    });

app.post('/', function(request, response){
    console.log(eval(request.body.opdracht));
    ;
});

app.listen(3000);


console.log("Hallo meneer de uil");