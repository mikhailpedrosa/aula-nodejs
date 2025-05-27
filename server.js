const {createServer} = require('node:http');

const host = "localhost";
const port = 3000;

// http://localhost:3000/users

// const users = ['Reagan', 'Margareth', 'Mikhail']

const users = [
    {
        id: 1,
        nome: 'Reagan',
        idade: 75
    },
    {
        id: 2,
        nome: 'Margareth',
        idade: 70,
    },
    {
        id: 3,
        nome: 'Mikhail',
        idade: 80
    }
]

const server = createServer((req, res) => {
    //response.writeHead(200,{'Content-Type':'text/plain'});
    //res.writeHead(200,{'Content-Type':'http'});

    //const url = req.url;
    //const method = req.method;
    //console.log(req.url, req.method);

    const {url, method} = req;

    if (url === '/') {
        res.writeHead(200, {'Content-type':'http'});
        return res.end("<h1>Hello, I am NODE.JS :)</h1>");
    };


    if (method === 'GET' && url === '/users') {
        res.writeHead(200, {'Content-type':'application/json'});
        return res.end(JSON.stringify(users));
    };

    if (method === 'POST' && url === '/users') {
        res.writeHead(200, {'Content-type':'text/plain'});
        users.push(
            {
                id: 4,
                nome: 'João Paulo',
                idade: 87
            }
        )

        return res.end('Usuario Adicionado.');
    };

    if (method === 'DELETE' && url === '/users') {
        res.writeHead(200, {'Content-type':'text/plain'});

        users.pop();

        return res.end('Usuario Excluido.');
    };

    if (method === 'PUT' && url === '/users') {
        res.writeHead(200, {'Content-type':'text/plain'});
        
        users[0].idade = 60;

        return res.end('Usuario Altereado.');
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