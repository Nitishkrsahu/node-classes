const http = require('http');

//plain-text
// http.createServer(function(req, res){
//     res.writeHead(200, {'content-type': 'text/plain'});
//     res.write("Welcome to Node Server.....");
//     res.end();
// }).listen(4040);


//html-content
// http.createServer(function(req, res){
//     res.writeHead(200, {'content-type': 'text/html'});
//     res.write("<h2>Welcome to Node Server.....</h2>");
//     res.end();
// }).listen(4040);


// content-json
http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'application/json'});
    res.write(JSON.stringify([{Name: 'TV', Price: 45000}, {Name: 'Mobile', Price: 15000}]));
    res.end();
}).listen(4040);

console.log(`Server Started on : http://127.0.0.1:4040`);

// Object.keys(http.STATUS_CODES).map(key=>{
//     console.log(`${key}: ${http.STATUS_CODES[key]}`)
// })