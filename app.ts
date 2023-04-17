import * as http from 'http';

const port = 3000;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log("INCOMING MESSAGE REQUEST OBJECT");
    console.log("-------------------------------");
    console.log(req);
    
    res.end('Hello World');
});

server.listen(port, () => {
    console.log(`Server listeneing on port ${port}`)
})