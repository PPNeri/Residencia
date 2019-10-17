class Conta{

    constructor(){

        this.nome_titular;
        this.numero;
        this.saldo;


    }

    mostra_saldo(){

        console.log(`Sr. ${this.nome_titular} seu saldo atual é `,this.saldo.toFixed(2));
    }

    depositar(valor){
        this.saldo+=valor;
        console.log("Foi depositado ",valor.toFixed(2));
        this.mostra_saldo();
    }
    sacar(valor){

        this.saldo-=valor;
        console.log("Foi sacado ",valor.toFixed(2));
        this.mostra_saldo();

    }






};

conta001=new Conta();
conta002=new Conta();

conta001.nome_titular="Pedro Neri";
conta001.numero=002;
conta001.saldo=1500;

conta002.nome_titular="Paulinho gógó";
conta002.numero=003;
conta002.saldo=50000;

console.log(conta001);
console.log(conta002);

conta001.mostra_saldo();
conta002.depositar(50);