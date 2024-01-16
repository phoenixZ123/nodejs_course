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
  ...object3
};
console.log(object2);

const array = [1, 2, 3];
const array2 = [4, 5, 6];
const nextArray = [...array, ...array2];
console.log(nextArray);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
