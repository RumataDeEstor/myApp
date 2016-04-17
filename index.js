var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/user/0', function (req, res, next) {
	res.render('index.html');
}) 
app.use('/user/1', function (req, res, next) {
	res.send("Да это же AJAX :)");
}) 

app.listen(process.env.PORT || 8080, ()=> {
  console.log('Started...');
});