var net = require('net');
var guidGenerator = require("./module/guidGenerator");

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
    setTimeout( sendData, 5000);
});

function sendData(){
    let data = {"guid" : guidGenerator.generateGuid(), "dateTime" : new Date()};
    client.write(JSON.stringify(data));
}

client.on('data', function(data) {
    var response = JSON.parse(data);
    console.log('Status: ' + response.status);
    if(response.error != null) {
        console.log('Error occured: ' + response.error);
    	client.destroy();
    } else {
        setTimeout( sendData, 5000);
    }
});

client.on('error', function(err) {
	console.log('Error occured: ' + err);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});
