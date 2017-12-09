// Load the http module to create a HTTP server.
var http = require('http');

// Configure our HTTP server to response requests.
var server = http.createServer(function (requests, response) {
	response.writeHead(200, { "Content-Type": "text/plain"});
	response.end("Bittiger!\n");
});

// Listenn on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");