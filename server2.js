const {createServer} = require('node:http');


const Users = require('./routes/users');
const users = new Users();
const host = "localhost";
const port = 3000;

// http://localhost:3000/users

const server = createServer((req, res) => {

    const {url, method} = req;
   
    if (url === '/') {
        res.writeHead(200, {'Content-type':'http'});
        return res.end("<h1>Hello, I am NODE.JS :)</h1>");
    };


    if (method === 'GET' && url === '/users') {
        res.writeHead(200, {'Content-type':'application/json'});
        return res.end(JSON.stringify(Users.get()));
        //return users.get();
    };

    if (method === 'POST' && url === '/users') {
        res.writeHead(200, {'Content-type':'text/plain'});
        Users.post();
        //return Users.post();
        return res.end('Usuario Adicionado.');
    };

    if (method === 'PUT' && url === '/users') {
        res.writeHead(200, {'Content-type':'text/plain'});
        
        Users.put();
        //return Users.put();
        return res.end('Usuario Altereado.');
    };

    if (method === 'DELETE' && url === '/users') {
        res.writeHead(200, {'Content-type':'text/plain'});

        Users.delete();
        // return Users.delete();
        return res.end('Usuario Excluido.');
    };

    res.writeHead(404, {'Content-type':'text-plain'});
    return res.end("Pagina nao encontrada");

    //return res.end("<h1>Hello, I am NODE.JS :)</h1>");
});


server.listen(port,host,()=>{
    console.log(`Servidor executando: http://${host}:${port}`)
})

console.log("Hello World");

//HEAD - STATUS CODE (exemplo: 200, 404, 500)

//HEADER - CONTENT TYPE: 