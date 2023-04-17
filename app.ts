import * as http from 'http';

const port = 3000;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if (url === '/message' && method === 'GET') {
        res.setHeader('Content-Type', "text/html");
        res.write("<html>");
        res.write("<head><title>Node Server</title></head>");
        res.write("<body>");
        res.write("<h2>Message Form</h2>");
        // form tag updated with the method and action attributes
        res.write(`<form method="POST" action="/message"><input type="text" name="message"><button>Submit</button></form>`)
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    else if (url === '/message' && method == 'POST') {
        res.setHeader('Content-Type', "text/html");
        res.write("Received Message Form")
        return res.end();
    }

    res.write("<html>");
    res.write("<head><title>Node Server</title></head>");
    res.write("<body><h2>Hello World</h2></body>");
    res.write("</html>");
    res.end();
});

server.listen(port, () => {
    console.log(`Server listeneing on port ${port}`)
})