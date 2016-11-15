var express= require('express');
var app= express();
app.get('/', function(req, res){
	res.sendFile('C:/Users/Melo Barbosa/projects/FrontEnd/server/time1.html');
});
app.listen(3000);