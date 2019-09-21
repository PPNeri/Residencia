let n1="10"
let n2="33"
let n_float="7.89"
let boll_var="false"

let ans;
let num=10;
let booleano=true;

//----------------------------------------------------String --->Numero
console.log("\nString --> numero")
console.log("Tipo velho ",typeof n1)
ans=parseInt(n1)*2
console.log("Resultado",ans)
console.log("Tipo Novo",typeof ans)
//-------------------------------------------------String --->Float
console.log("\nString --> Float")
console.log("Tipo antigo do n_Float",typeof n_float)
ans=parseFloat(n_float)
console.log("Tipo novo do n_Float",typeof ans)
console.log("Resultado novo",ans)
//-------------------------------------------------String --->Boolean
console.log("\nString --> Boolean")
console.log("Tipo Antigo do boleano_var", typeof boll_var)
ans=boll_var == "true"
console.log("Tipo novo do boleano",typeof ans)
console.log("Resultado novo",ans)
//--------------------------------------------------Boolean --->Number
console.log("\nBoolean --> number")
console.log("Tipo Antigo",typeof booleano)
//ans=parseInt(booleano)
ans=booleano-0
console.log("Resultado depos da conversão : ",ans)
console.log("Tipo novo",typeof ans)
//-------------------------------------------------Number --->Boolean
console.log("\nnumber --> boolean")
console.log("Tipo Antigo",typeof num)
//ans=!!num
ans=num==1
console.log("Resultado depos da conversão : ",ans)
console.log("Tipo novo",typeof ans)
//-------------------------------------------------Number --->String
console.log("\nnumber --> String")
console.log("Tipo Antigo",typeof num)
ans=num+""
console.log("Resultado depos da conversão : ",ans)
console.log("Tipo novo",typeof ans)