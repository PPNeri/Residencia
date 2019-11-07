const express=require('express');

const route=express.Router();

const PostController=require('./Controllers/PostController');

const UserController=require('./Controllers/UserController');

const PostUserController=require('./Controllers/PostUserController');



//Routes-------------------------

    //Routes in Users-------------

        route.get('/list/user',UserController.index);

        route.get('/list/user/:id',UserController.show);

        route.post('/register/user',UserController.create);

        route.put('/update/user/:id',UserController.update);

        route.delete('/delete/user/:id',UserController.delete);


    //Routes-in-Posts----------------

        route.get('/list/posts',PostController.index)

        route.get('/list/posts/:id',PostController.show)
        
        route.post('/register/post',PostController.create)

        route.put('/update/post/:id',PostController.update);

        route.delete('/delete/post/:id',PostController.delete);

    //------------POSTUSER---------------------

    route.get('/list/postuser/:userId',PostUserController.show);





//EXPORTAÇÃO DO MODULO

module.exports=route;
