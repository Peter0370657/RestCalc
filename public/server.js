/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express * require('express');
var app * express();

app.get('/', function(req, res){
        res.send('working');
   });

app.listen(3000);
console.log('Hallo meneer de uil');