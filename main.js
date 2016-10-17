var express = require("express");
var app = new express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function (req, res) {
    res.send('typ je opdracht in de adresbalk vb: /calc/2%2B5  (kijk naar de readme om de code te bekijken voor + - * of \/ )');
    
});
app.get('/calc', function (req, res) {
        
	console.dir(req.body);  
	var calc = req.body.bodycalc;
	
        var antwoord = eval(req.body.bodycalc);
        console.dir(antwoord);
        res.send(String(antwoord));
        console.log(req.params.opdracht);
});

app.get('/calc/:opdracht',function(req, res){ 
        var opdrachtlezen = req.params.opdracht;
        console.log(req.params.opdracht);
        var antwoord = eval(req.params.opdracht);
        console.log(antwoord);
        res.send(String(antwoord));
        console.log(req.params.opdracht);
});


app.listen(3456);