const express = require('express');
let app = express();

app.get('/', function(req,res){
  res.send('The code is hosted via AWS');
})

const port = process.env.port || 3000;
app.listen(port,function(req, res){
  console.log('server is runnning on port:'+port);
})