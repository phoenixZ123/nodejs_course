import * as express from "express";

let app: express.Application = express();

const object1 = { id: 1, name: "bae" };
// ...spread operator convert as single element
// change value in{}
const object3 = { age: 24, location: "Nay pyi taw" };
const object2 = {
  ...object1,
  email: "ppw112@gmail.com",
  password: 111,
  id: 4,
  name: "thalthal",
  ...object3,
};
console.log(object2);

const array = [1, 2, 3];
const array2 = [4, 5, 6];
const nextArray = [...array, ...array2];
console.log(nextArray);

app.get("/api/user/login", (req, res) => {
  // should use 200oK if use other 400 or other,they show unauthorized.
  // const user = {
  //   name: "Pyae Phyoe Wai",
  //   email: "phuephue1125@gmail.com",
  //   password: "%erq!@",
  // };
  // res.status(200).send("hi there");
  // json {name:"ppw",age:24} object
  // res.status(200).json(user);
  console.log("email : " + req.query.email);
  res.send("success get method");
});
app.get("/api/user/test", (req, res) => {
  res.send("test");
});
app.post("/api/login", (req, res) => {
  res.json({
    name: "ppw",
    age: 24,
  });
  console.log("success");
  // console.log(req)
});
// app.put();
app.patch("/api/user/password", (req, res) => {
  res.send("send patch");
});
// app.delete();

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
