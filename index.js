var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res, next) => {
  res.render('index.html');
});
app.get('/user/:id', (req, res, next) => {
  res.send(`${req.params.id} user page.`);
});

app.listen(process.env.PORT || 8080, ()=> {
  console.log('Started...');
});