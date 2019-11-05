const EXPRESS=require('express');
const app=EXPRESS();

app.get('/',function(req,res){
    res.send('ola Mundo');
});

app.all('/secret',function(req,res,next){
    res.send("Acessando a função secreta");
    res.send("Rota secreta");//Res sendo so pode ser utilizado uma unica vez
    next();
})

app.listen(8000,function(){
    console.log('Servidor rodando em localhost 8000');

});
