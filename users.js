class Users {
    static list = [
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
    ];

    static get(){
        return Users.list;
    };
    static post(id, nome, idade){
        return Users.list.push({
            id: 4,
                nome: 'João Paulo',
                idade: 87
        });

    };
    static put(id){
        Users.list[0].idade = 60;

    };
    static delete(index){
        Users.list.splice(index, 1);
    };
}

module.exports = Users;