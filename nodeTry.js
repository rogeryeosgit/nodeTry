var http = require('http');
// var m2 = require("./module2");

var server = http.createServer(function(request, response) {
    console.log("got a request");
    response.write('hi');
    response.end();
});

// console.log(m2);

server.listen(3000);
