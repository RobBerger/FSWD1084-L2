import * as http from 'http';

const port = 3000;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.write("<html>");
    res.write("<head><title>Node Server</title></head>");
    res.write("<body><h2>Hello World</h2></body>");
    res.write("</html>");
    
    res.end();
});

server.listen(port, () => {
    console.log(`Server listeneing on port ${port}`)
})