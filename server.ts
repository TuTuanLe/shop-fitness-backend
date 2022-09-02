import http, {Server, IncomingMessage, ServerResponse} from 'http';

const hostname :string = '127.0.0.1';
const port:number = 5000;

const server:Server = http.createServer((request:IncomingMessage, response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader ('Content-Type','text/html');
    response.end(`<h3 style="color:green"> welcome to node js server </h3>`)
})


server.listen(port, hostname, ()=>{
    console.log(`node js server is startd at http://${hostname}:${port}`)
})