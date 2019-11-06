const express = require('express');
const mustacheExpress = require('mustache-express');
const packageData = require('./data')
const server = express();

const Port = process.env.PORT || 8001;


server.engine('html', mustacheExpress());
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
server.use(express.static(__dirname + '/public'));


server.get('/', (req, res) => {
  // res.render('index')
  // console.log("index");
  // console.log(packageData);
  // @ts-ignore
  res.render("index", packageData);
})



server.listen(Port, () => {
  console.log(`Server listening on port ${Port}!`);
});
