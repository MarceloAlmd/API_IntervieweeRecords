class UsersController {
  create(request, response) {
    const {name, Email, password} = request.body

    response.status(201).json({name, Email, password})
  }
}

module.exports = UsersController