
/*TO run this First start the server from HYPER with command - node calculator.js 
    and then go to browser type - localhost:3000/ -- for calculator
    and type - localhost:3000/bmi -- for bmi calculator.
*/

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get("/", function(req, res){
    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send("Result is " +result);
});

app.get("/bmi", function(req, res){
    res.sendFile(__dirname +"/bmicalculator.html");
});

app.post("/bmi", function(req, res){
    var h = parseFloat(req.body.h);
    var w = parseFloat(req.body.w);
    var bmi = w / (h*h);
    res.send("Result is " +bmi);
});

app.listen(port, function(){
    console.log("server started on port - 3000");
});