import * as express from "express";

// namespace declare -->express.Application
let app: express.Application = express();

function Math_ByX() {
  return true;
}
function Math_ByY() {
  return false;
}

function result(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (Math_ByX()) {
      resolve("math By X arrive");
    } else if (Math_ByY()) {
      resolve("this is Math By Y arrive");
    } else {
      reject("Nothing at both arrive");
    }
  });
}
//
function Java() {
  return false;
}
function NodeJS() {
  return false;
}
function resultLanguageBook() {
  return new Promise((resolve, reject) => {
    if (Java()) {
      resolve("java" + true);
    } else if (NodeJS()) {
      resolve("nodejs " + true);
    } else {
      reject("reject " + false);
    }
  });
}
async function resultBook() {
  try {
    let book = await resultLanguageBook();
    return book;
  } catch (e) {
    return e;
  }
}
resultBook()
  .then((result) => {
    if (result) {
      resultLanguageBook()
        .then((data) => {
          console.log("Language: " + data);
        })
        .catch((error) => {
          // reject true in error
          console.log("error: ", error);
        });
    }
  })
  .catch((e) => {
    return e;
  });
// result().then((result)=>{
// console.log(result)
// }).catch(error=>{
//     console.log('error: '+error)
// })

// async await function

async function final() {
  try {
    let res = await result();
    // if math result true , auto include LanguageBook result.
    if (res) res = await resultBook();
    // will be return the same
    return res;
  } catch (e) {
    return e;
  }
}
final()
  .then((data) => {
    console.log("Math : " + data);
  })
  .catch((e) => {
    console.log(e);
  });

// asynchronous
let port = 3000;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
