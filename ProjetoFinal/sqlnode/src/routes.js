const express=require('express');

const UserController=require('./controllers/UserController');
const ImmobileController=require('./controllers/ImmobileController');
const ReportController=require('./controllers/ReportController');

const routes=express.Router();

routes.get('/users',UserController.index);  
routes.post('/users',UserController.store);

routes.get('/users/:user_id/immobiles',ImmobileController.index);
routes.post('/users/:user_id/immobiles',ImmobileController.store);
routes.delete('/users/:user_id/immobiles',ImmobileController.delete);

routes.get('/report',ReportController.show);



module.exports=routes;