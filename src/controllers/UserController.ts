import User from "../models/User";
import { validationResult } from "express-validator";
export class UserController {
  // declare for method this is

  static signup(req, res, next) {
    const errors = validationResult(req);
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const status = req.body.status;
    if (!errors.isEmpty()) {
      next(new Error(errors.array()[0].msg));
    }
    const data = {
      name,
      phone,
      email,
      password,
      type,
      status,
    };
    let user = new User(data);
    user
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        next(err);
      });

    console.log(req.body);
    // async
    console.log("user auth");
  }
}
