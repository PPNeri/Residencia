function load(){
    
    let img=document.getElementById("imagem");
    let msg=document.getElementById("msg");

    let data=new Date();
    let hora=data.getHours();
    let minutos=data.getMinutes();

    msg.innerHTML=`Agora são ${hora} horas e ${minutos} minutos`;
    

    if(hora>=0 && hora<12){
        img.src="img/manha.jpg";
    }else if(hora>12 && hora<18){
        img.src = "img/tarde.jpg";
    }else{
        
            img.src = "img/noite.jpg";
    }


}