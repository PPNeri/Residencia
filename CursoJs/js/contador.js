function verificar(){
    
    let data=new Date();
    let ano=data.getFullYear;
    let resp=document.querySelector('div#resp');
    let entradaAno=document.getElementById('txtano');

    if (ano<Number(entradaAno.value) || entradaAno.value.length==0){
        alert("Insira um ano Válido")
    }else{
        let entradasexo=document.getElementsByName("radsex")
        let idade=ano-Number(entradaAno.value);
        resp.innerHTML=`Idade é ${idade}`;


    }






}