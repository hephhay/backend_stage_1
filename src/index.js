const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({
        "slackUsername": "hephhay",
        "backend": true,
        "age": 22,
        "bio": "I Farayola Daniel a Backend Developer Using Django and node I am very passionate about learning"
    }));
    res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});