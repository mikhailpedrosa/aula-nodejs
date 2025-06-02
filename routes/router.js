const users = require('./users');

const rotas = {
    '/users':{
        'GET': users.get(),
        'POST': users.post(),
        'PUT': users.put(),
        'DELETE': users.delete()
    }
}
module.exports = rotas;