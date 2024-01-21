export class UserController {
  // declare for method this is
  static login(req, res, next) {
    const user = { name: "will austin", age: 24 };
    res.status(200).send(user);
    next();
  }
  static test1(req, res, next) {
    (req as any).msg = "this is req test";
    next();
  }
  static test2(req, res) {
    res.send((req as any).msg);
    console.log("this is test2");
  }
}
