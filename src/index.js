const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
        'Access-Control-Allow-Methods': 'OPTIONS, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        'Content-Type': 'application/json'
    };

    if (req.method === 'OPTIONS') {
        res.writeHead(204, headers);
        res.end();
        return;
    }

    if (req.method === 'GET') {
        res.writeHead(200, headers);
        res.write(JSON.stringify({
            "slackUsername": "hephhay",
            "backend": true,
            "age": 22,
            "bio": "I Farayola Daniel a Backend Developer Using Django and node I am very passionate about learning"
        }));
        res.end();
        return;
    }

    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed for the request.`);
    return;
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});