import * as http from 'http';

const reqHandler = (req: http.IncomingMessage, res: http.ServerResponse) =>{
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
        const body: Buffer[] = [];

        req.on('data', function (datachunk) {
            console.log(datachunk);
            body.push(datachunk);
        });

        req.on('end', function () {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const value = parsedBody.split("=")[1];
            res.write("<html>");
            res.write("<head><title>Node Server</title></head>");
            res.write("<body>");
            res.write("<div>Received Message Form</div>")
            res.write(`<div>Message Content: ${value}</div>`); 
            res.write("</body>");
            res.write("</html>");
            return res.end();
        });
    } else {
        res.write("<html>");
        res.write("<head><title>Node Server</title></head>");
        res.write("<body><h2>Hello World</h2></body>");
        res.write("</html>");
        res.end();
  }
}

export default reqHandler;