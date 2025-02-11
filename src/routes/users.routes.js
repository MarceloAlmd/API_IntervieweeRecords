const {Router} = require("express")
const UsersController = require("../controllers/UsersControllers")

const usersRoutes = Router()

const usersController = new UsersController

function myMiddleware(request, response, next) {
    console.log ("you called middleware")

    const {name} = request.body

    if(name != "Marcelo"){
        return response.json(`Você não é um usuario administrativo`)
    }else {
			return next()
		}

    
}

usersRoutes.post("/", myMiddleware, usersController.create) 

module.exports = usersRoutes