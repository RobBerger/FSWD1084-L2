import * as http from 'http';
import reqHandler from './routes';

const port = 3000;

const server = http.createServer(reqHandler);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});