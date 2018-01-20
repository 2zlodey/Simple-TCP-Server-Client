var net = require('net');
var dbHandler = require("./module/dbHandler");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db');

var server = net.createServer(function(socket) {
    socket.on('data', function(data){
        var request = JSON.parse(data);
        console.log("Incoming request: " + request);
        let response = {"status" : null, "error" : null};;
        dbHandler.saveMessage(request)
            .then((data) => {
                response.status = data.status;
                socket.write(JSON.stringify(response));
            }, (err) => {
                response.status = "not ok";
                response.error = err;
                socket.write(JSON.stringify(response));
            });
    });

    socket.on('error', function(err){
        console.log(err);
    });
});

server.listen(1337, '127.0.0.1');
