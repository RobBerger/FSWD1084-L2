"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const port = 3000;
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/message' && method === 'GET') {
        res.setHeader('Content-Type', "text/html");
        res.write("<html>");
        res.write("<head><title>Node Server</title></head>");
        res.write("<body>");
        res.write("<h2>Message Form</h2>");
        // form tag updated with the method and action attributes
        res.write(`<form method="POST" action="/message"><input type="text" name="message"><button>Submit</button></form>`);
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    else if (url === '/message' && method == 'POST') {
        res.setHeader('Content-Type', "text/html");
        res.write("Received Message Form");
        return res.end();
    }
    res.write("<html>");
    res.write("<head><title>Node Server</title></head>");
    res.write("<body><h2>Hello World</h2></body>");
    res.write("</html>");
    res.end();
});
server.listen(port, () => {
    console.log(`Server listeneing on port ${port}`);
});
