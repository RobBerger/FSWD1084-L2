import * as http from 'http';

const port = 3000;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    
    res.end('Hello World');
});

server.listen(port, () => {
    console.log(`Server listeneing on port ${port}`)
})