import User from "../models/User";
import { validationResult } from "express-validator";
export class UserController {
  // declare for method this is

  static signup(req, res, next) {
    // (req as any).errorStatus = 422;
    // const error = new Error("user email or password does not match");
    // 422
    // next(error);
    // req.body is body-parser used.
    const error = validationResult(req);
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array().map((e) => e.msg) });
    }

    // const user = new User({
    //   name
    //   email,
    //   password,
    // });

    // user
    //   .save()
    //   .then((user) => {
    //     res.send(user);
    //   })
    //   .catch((e) => {
    //     const err = new Error(e);
    //     next(err);
    //   });
    console.log(req.body);
    // async
    console.log("user auth");
  }
  static test1(req, res, next) {
    (req as any).msg = "this is req test1";
    next();
  }
  static test2(req, res) {
    // will show test1
    res.send((req as any).msg);
    console.log("this is test2");
  }
}
