import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    // user is a object of schema, UserSchema extending UserInterface
    const user = await User.create(req.body)

    // so the atributtes of UserSchema is available
    // console.log(user.email)
    // console.log(user.firstName)
    // console.log(user.lastName)

    console.log(user.fullName)

    return res.json(user)
  }
}

export default new UserController()
