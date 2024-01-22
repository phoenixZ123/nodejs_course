export class UserController {
  // declare for method this is
  static login(req, res, next) {
    (req as any).errorStatus = 422;
    const error = new Error("user email or password does not match");
    // 422
    next(error);
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
