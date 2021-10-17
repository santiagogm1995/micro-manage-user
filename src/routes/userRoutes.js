import express from 'express';
import userController from './../controllers/userController.js';


const userRoutes = express.Router();


userRoutes.get('/users/:id',userController.sayHello);
userRoutes.get('/users',userController.sayHello)
userRoutes.post('/users')
userRoutes.put('/users/:id')
userRoutes.delete('users/:id')


export default userRoutes;