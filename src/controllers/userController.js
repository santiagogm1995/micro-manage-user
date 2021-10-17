class UserController{

    sayHello(req, res){
        res.send('Hello World!');
    }

}

export default new UserController()