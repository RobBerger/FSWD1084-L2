import * as http from 'http';

const port = 3000;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.end('Hello World');
});

server.listen(port, () => {
    console.log(`Server listeneing on port ${port}`)
})