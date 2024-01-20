import * as express from "express";
import * as mongoose from "mongoose";
let app: express.Application = express();

// as middleware
app.use((req, res, next) => {
  console.log("middleware start");
  next();
});

mongoose
  .connect(
    "mongodb+srv://willaustin:willaustin@testnodejs.cvcyxuo.mongodb.net/testnodejs?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongodb connected");
  });

app.get("/api/user/test", (req, res) => {
  res.status(200).send("user test");
});

// app.get(
//   "/api/user/login",
//   (req, res, next) => {
//     console.log("user login");
//     const data = [{ name: "will_austin" }];
//     res.send(data);
//     next();
//   }
 // ,
  // (req, res) => {
  //   console.log("middeware 2");
  //   res.status(200).send("test");
  // }
// );
//

// app.use((req, res, next) => {
//   console.log("middleware 1");
//   next();
// });
// const object1 = { id: 1, name: "bae" };
// // ...spread operator convert as single element
// // change value in{}
// const object3 = { age: 24, location: "Nay pyi taw" };
// const object2 = {
//   ...object1,
//   email: "ppw112@gmail.com",
//   password: 111,
//   id: 4,
//   name: "thalthal",
//   ...object3,
// };
// console.log(object2);

// const array = [1, 2, 3];
// const array2 = [4, 5, 6];
// const nextArray = [...array, ...array2];
// console.log(nextArray);

// app.get("/api/user/login", (req, res) => {
//   console.log("email : " + req.query.email);
//   res.send("success get method");
// });

// app.post("/api/login", (req, res) => {
//   res.json({
//     name: "ppw",
//     age: 24,
//   });
//   console.log("success");
//   // console.log(req)
// });
// // app.put();
// app.patch("/api/user/password", (req, res) => {
//   res.send("send patch");
// });
// // app.delete();

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
