const carro_1 = {
    nome: "Marquinhos",
    car: "Vermelho"
}

const carro_2 = {
    nome: "Matheus",
    cor:"Ferrugem"
}

console.log([carro_1, carro_2, {
    nome: "Celia",
    cor: "azul"
}])

class Carro {
    nome;
    cor;

    constructor(nome, cor){
        this.nome = nome;
        this.cor = cor;
    }
}

const carro_4 = new Carro('besouro','amarelo');
const carro_5 = new Carro('optimus primo', 'tricolor')
// let carro_4 = new Carro

// carro_4 = {
//     nome: 'Camaro',
//     cor: 'Amarelo'

    
// }

console.log(carro_4, carro_5);

class Personagem{
    nome;
    classe;
    magia;

    constructor(nome, classe, magia){
        this.nome = nome;
        this.classe = classe;
        this.magia = magia;
    }

    atacar(){
        return `${this.nome} atacou`
    }
    feitico(){
        return `${this.magia} foi invocada`
    }
}

const subZero = new Personagem('Sub Zero', 'Ninja', 'Gelo')

console.log(subZero)
console.log(subZero.nome)
console.log(subZero.magia)
console.log(subZero.classe)
console.log(subZero.atacar())
console.log(subZero.feitico())

const Jedi = new Personagem ('Anakin', 'Escolhido', 'High Ground')

console.log(Jedi)

const Sith = Jedi
console.log(Sith)

Sith.nome = 'Darth Vader'

console.log(Sith)
console.log(Jedi)

class caneta {
    tipo;
    cor;
    constructor(tipo, cor){
        this.tipo = tipo;
        this.cor = cor;
    }

    escrever(){
        return 'caneta escrevendo'
    }
}

class SuperPersonagem extends Personagem{

    constructor(nome, classe, magia, especial, fatality){
        super(nome, classe, magia);
        this.especial = this.especial;
        this.fatality = this.fatality;
    }

    atacar(){
        return `${this.nome} atacou`
    }
    feitico(){
        return `${this.magia} foi invocada`
    }

}

class Caneta {
    tipo;
    cor;
    constructor(tipo, cor){
        this.tipo = tipo;
        this.cor = cor;
    }

    static escrever(){
        return 'caneta escrevendo'
    }
}

console.log(Caneta.escrever());