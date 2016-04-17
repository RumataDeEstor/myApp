var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.engine('html', require('jade').renderFile);

app.get('/', (req, res, next) => {
  res.render('index.html');
});
app.get('/user/:id', (req, res, next) => {
  res.send(`${req.params.id} user page.`);
});

app.listen(process.env.PORT || 8080, ()=> {
  console.log('Started...');
});