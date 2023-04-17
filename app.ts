import * as http from 'http';

const port = 3000;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if (url === '/message' && method === 'GET') {
        res.write("<html>");
        res.write("<head><title>Node Server</title></head>");
        res.write("<body>");
        res.write("<h2>Message Form</h2>");
        // Using back ticks so we can include quotation marks
        res.write(`<form><input type="text" name="message"><button type="submit">Submit</button></form>`)
        res.write("</body>");
        res.write("</html>");
        
        return res.end()
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