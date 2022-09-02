import http, {Server, IncomingMessage, ServerResponse} from 'http';
import os from 'os';

const hostname :string = '127.0.0.1';
const port:number = 5000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader ('Content-Type','text/html');
    let osData = {
        totalMemory :os.totalmem(), 
        freeMemory: os.freemem(),
        homedir: os.homedir(),
        computerName: os.hostname()
    }

    response.end(`<pre style="color:green">${JSON.stringify(osData)}</pre>`)
})


server.listen(port, hostname, ()=>{
    console.log(`node js server is startd at http://${hostname}:${port}`)
})