function contar(){

    
    
    let start=Number(document.getElementById("inicio").value)
    let end=Number(document.getElementById("fim").value)
    let step=Number(document.getElementById("passo").value)
    let asn=document.getElementById("resp")

    for(let i=start;i<=end;i+=step){
            asn.innerHTML+=` ${i} \u{1F449}`;
            
    }


}
