var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res)
{
  res.sendFile(path.join('C:/Users/Norbi/Desktop/Program2/'+'strona.html'));

});

app.get('/about',function(req,res)
{
  res.sendFile(path.join('C:/Users/Norbi/Desktop/Program2/'+'timer.js'));

});



var server = app.listen(3000, function () 
{
    var host = server.address().address
    var port = server.address().port

    console.log('Express app listening at http://localhost/3000', host, port)
})