//create web server
//read comments.html file
//send the file content as response

// Import the http and fs modules
const http = require('http');
const fs = require('fs');

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Read the comments.html file using the fs module
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            // If there is an error reading the file, respond with a 404 status code and error message
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 Not Found');
        } else {
            // If the file is read successfully, respond with a 200 status code and the file content
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

// The server listens on port 3000
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Print the URL to access the server
console.log('To access the server, open a web browser and go to http://localhost:3000');