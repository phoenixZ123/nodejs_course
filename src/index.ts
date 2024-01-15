import * as express from 'express';

// namespace declare -->express.Application
let app: express.Application = express();



function Math_ByX(){
    return false;
}
function Math_ByY(){
    return true;
}

function result():Promise<string>{
return new Promise ((resolve,reject)=>{
if(Math_ByX()){
    resolve("math By X arrive");   
}else if(Math_ByY()){
    resolve("this is Math By Y arrive");
}else{
    reject("Nothing at both arrive");
}

})
}
// result().then((result)=>{
// console.log(result)
// }).catch(error=>{
//     console.log('error: '+error)
// })

// async await function

async function final(){
// let res=await result();
// return res;
try{
 let res=await result();
 return res;
}catch(e){
return e
}
}
final().then((res)=>{
console.log(res);
})

// asynchronous
let port=3000;
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})