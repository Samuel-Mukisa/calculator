const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
// res.sendFile(__dirname + '/index.html');
res.sendFile(__dirname + '/index.html');
});
app.post("/",(req,res) =>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var num3 = num1 + num2;
    res.send("The result of the calculation is " + num3);
});
app.get("/bmicalculate",(req,res) =>{
   res.sendFile(__dirname + "/bmiCalculator.html");
})
app.post("/bmicalculate",(req,res) =>{
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / (height * height);
  res.send("Your BMI is " + result);
});
app.listen(3000,function(){
    console.log("Server is starting");
});