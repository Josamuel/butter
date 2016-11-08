const User = require('../models/user')

module.exports = {

  createUser: (req,res) => {
    const body = req.body

    User
    .fetch(body.email)
    .then((user) => {
      if(!user){
        const newUser = {
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
        }
        User
        .save(newUser)
        .then((id) => {
          return res.status(201).send({id: id})
        })
        .catch((err) => {
          return res.status(500).send({Error: err})
        })
      } else {
        return res.status(403).send({Error: "User already exist"})
      }

    })
  }
}