let n1="10"
let n2="33"
let n_float="7.89"
let boll_var="true"

console.log("Tipo velho ",typeof n1)

ans=parseInt(n1)*2

console.log("Resultado",ans)
console.log("Tipo Novo",typeof ans)

console.log("Tipo antigo do n_Float",typeof n_float)

ans=parseFloat(n_float)

console.log("Tipo novo do n_Float",typeof ans)
console.log("Resultado novo",ans)


console.log("Tipo Antigo do boleano_var", typeof boll_var)
//ans=parseInt(boll_var)=== parseInt(boll_var)
ans=boll_var=== boll_var
console.log("Tipo novo do boleano",typeof ans)
console.log("Resultado novo",ans)