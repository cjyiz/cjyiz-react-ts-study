// // import { rejects } from "assert";
// // import { promises, resolve } from "dns";

// import { resolve } from "dns";

// const promise = new Promise((resolve, reject) => {
//     resolve(123)

//     reject('我死你打')

// });

// Promise.resolve(123).then(res=>{
//     return true
// }).then(res=>{
//     console.log('res',res)
// })
// promise.then(res=>[
// console.log('I get called',res===123)
// ])
// promise.catch(err=>{
//     console.log(err)
// })

// const returnPromise=():Promise<string>=>{
//     console.log('返回了promise的函数')
//     return new Promise(
//         reslove=>{
//             setTimeout(()=>{
//                 reslove('我异步完了')
//             },3000)
//         }
//     )
// }
// Promise.resolve(123).then(res=>{
//     console.log('res',res)
//     return returnPromise()
// }).then((res)=>[
//     console.log(res)
// ])

// import from 'fs')
import fs from "fs";
import { ElementRef } from "react";
// import util from 'util'
const readFileAsync = (fileName: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

const loadJSONAsync = (fileName: string): Promise<any> => {
  return readFileAsync(fileName).then((res) => {
    return JSON.parse(res);
  });
};
loadJSONAsync("goodJson")
  .then((val) => console.log("打印出来", val))
  .catch((err) => {
    console.log("出错了救不活", err);
  });

const draw = async (type: string): Promise<void> => {
  console.log("确认画画类型");
};
const createArray=<T>(length:number,value:T):Array<T>=>{
    let result:T[]=[]
    return result
}