//Criação de um objeto
let entrada=require('readline-sync');
let op=Number(entrada.question("Digite uma opração 1-Saque 2-Deposito 3-Saldo 4-Sair "))
let data=new Date();

let conta={

    extrato:new Array(),
    nome_titular:"Pedro Neri",
    numero_conta:7444,
    saldo:1500,

    mostra_saldo(){

        console.log(`Sr. ${this.nome_titular} seu saldo em ${ data.getHours() } horas e ${data.getMinutes()} minutos  é `,this.saldo.toFixed(2));
    },

    operacao(num){

    },

    depositar(valor){
        this.saldo+=valor;
        console.log("Foi depositado ",valor.toFixed(2));
        this.mostra_saldo();
    },
    sacar(valor){

        this.saldo-=valor;
        console.log("Foi sacado ",valor.toFixed(2));
        this.mostra_saldo();

    }
};


switch(op){
    case 1:
        let valorSaque=Number(entrada.question(`Sr(a) ${conta.nome_titular} qual o valor que deseja sacar ?`));    
        conta.sacar(valorSaque);
    break;
    case 2:
        let valorDeposito=Number(entrada.question(`Sr(a) ${conta.nome_titular} Qual o valor que deseja depositar ? `))
        conta.depositar(valorDeposito);
    break;
    case 3:
        
        conta.mostra_saldo();
        break;

}

//conta.mostra_saldo();
/*conta.depositar(50);
conta.sacar(1500);
*/