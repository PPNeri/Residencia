class Conta{

    constructor(nome,conta,saldo){

        this.nome_titular=nome;
        this.numero=conta;
        this.saldo_conta=saldo;


    }

    mostra_saldo(){

        console.log(`Sr. ${this.nome_titular} seu saldo atual é `,this.saldo_conta);
    }

    depositar(valor){
        this.saldo+=valor;
        console.log("Foi depositado ",valor);
        this.mostra_saldo();
    }
    sacar(valor){

        this.saldo-=valor;
        console.log("Foi sacado ",valor);
        this.mostra_saldo();

    }






};

conta001=new Conta("Pedro Neri",002,1500);
conta002=new Conta("Paulinho",003,5000);
/*
conta001.nome_titular="Pedro Neri";
conta001.numero=002;
conta001.saldo=1500;

conta002.nome_titular="Paulinho gógó";
conta002.numero=003;
conta002.saldo=50000;
*/
console.log(conta001);
console.log(conta002);


conta001.mostra_saldo();
conta002.depositar(50);