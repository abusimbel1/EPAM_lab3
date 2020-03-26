const fs=require("fs")
// fs.writeFileSync("./text.txt", "my text",  "ascii")
// const express = require('express');
// // const consolidate = require('consolidate');
// const app = express();
// // app.engine('html', consolidate.swig);
// app.set('view engine', 'html');

// // const http = require('http');

// // const server = http.createServer(onServerRequest);
// // const port = 3000;
// // server.listen(port, onServerListen);

// // function onServerRequest(req, res) {
// //    res.statusCode = 200;
// //    res.setHeader('Content-Type', 'text/plain');
// //    res.end('Hello World\n');
// // }
// app.get("/", function(req, res) {
//     res.render('index');
// });
// app.listen(3333, function() {console.log("server is ready");
// });
const consolidate = require('consolidate');
const path = require('path');
const mustache = require('mustache-express');
const express = require('express');
const app = express();
app.use(express.static('views'));
//
// view engine setup
app.engine('html', consolidate.swig);
app.engine('mst', mustache());
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'mst');
app.use('/public', express.static(__dirname + '/public'));
// const script = require('./views/javascripts/script.js');


app.get("/", function(req, res) {
    let read = fs.readFileSync('./views/text.txt','utf8');
    console.log(read);
    let message = read;
    // let age = prompt('Сколько тебе лет?', 100);
    // alert(`Тебе ${age} лет!`);
    fs.writeFileSync("newfile.txt",message);
    res.render('index');
});



app.listen(3333, function() {console.log("server is ready");
});