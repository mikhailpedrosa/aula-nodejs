const {createServer} = require('node:http');
const rotas = require('./routes/router')

const host = "localhost";
const port = 3000;

// http://localhost:3000/users

const server = createServer((req, res) => {

    const {url, method} = req;
   
    if (url === '/') {
        res.writeHead(200, {'Content-type':'http'});
        return res.end("<h1>Hello, I am NODE.JS :)</h1>");
    };

    if (!rotas[url] || !rotas[url][method]) {
        res.writeHead(404, {'Content-type':'text-plain'});
        return res.end("Pagina nao encontrada");
    }

    const dados = rotas[url][method]
    res.writeHead(200, {'Content-type':'application/json'});
    return res.end(JSON.stringify(dados));

    
});


server.listen(port,host,()=>{
    console.log(`Servidor executando: http://${host}:${port}`)
})

console.log("Hello World");

//HEAD - STATUS CODE (exemplo: 200, 404, 500)

//HEADER - CONTENT TYPE: 