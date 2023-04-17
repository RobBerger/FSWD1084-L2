import * as http from 'http';

const port = 3000;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    // setting the response content type to text/html
    res.setHeader('Content-Type', 'text/html');

    // extracting the URL from the request object
    const url = req.url;

    if (url === '/') {
        // writing HTML content to be sent as response in multiple lines
        res.write("<html>");
        res.write("<head><title>Node Server</title></head>");
        res.write("<body><h2>Hello World</h2></body>");
        res.write("</html>");
    }
    else if (url === '/info') {
        // writing HTML content to be sent as response in multiple lines
        res.write("<html>");
        res.write("<head><title>Node Server</title></head>");
        res.write("<body>");
        res.write("<h2>Server Information</h2>");
        res.write("<div>Server Type: Node.js</div><div>Language: TypeScript</div><div>Port: 3000</div>")
        res.write("</body>")
        res.write("</html>");
    }

    // ending the response
    res.end();
});

server.listen(port, () => {
    console.log(`Server listeneing on port ${port}`)
})