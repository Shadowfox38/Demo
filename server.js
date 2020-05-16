const express = require('express');
const fs = require('fs');
var app = express();

app.use('/static',express.static('./public'));
app.use('/js',express.static('./js'));
app.use('/src',express.static('./src'));
app.use(express.urlencoded({extended: true}));
app.get('/',function(req,res)
{
  res.sendFile(__dirname +'/src/index.html');
});
app.post('/register',function(req,res)
{
  fs.appendFileSync('./Data/user.txt',req.body.email + '\n');
  fs.appendFileSync('./Data/pass.txt',req.body.pass + '\n');
  fs.appendFileSync('./Data/name.txt',req.body.fname + ' ' + req.body.lname + '\n');
  res.sendFile(__dirname + '/src/index.html');
})
app.listen(8080);
