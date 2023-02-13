
var express = require('express');
var app = express();
var PORT = 3000;
 let sum=require('./sum')
 let mult=require('./multiply')

app.get('/', function(req, res){
    res.send("The sum is "+sum);
});
app.get('/product',function(req,res){
    res.send("The product is"+mult)
})
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});