const Express=require('express')
const app=Express();

app.get('/',function(req,res){
    res.send("Hello World");
})
