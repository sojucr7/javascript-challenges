// class CustomPromise {
//   thenCbs=[]
//   catchCbs=[]

//   constructor(cb){
//     cb(this.resolve.bind(this),this.reject.bind(this))
//   }

//   resolve(value){
//     setTimeout(()=>{
//       this.thenCbs.forEach(cb => {
//         cb(value)
//       });
//     },0)
    
//   }

//   reject(){
//     setTimeout(()=>{
//       this.catchCbs.forEach(cb => {
//         cb(value)
//       });
//     },0)
    
//   }

//   then(cb){
//     this.thenCbs.push(cb)
//     return this
//   }

//   catch(cb){
//     this.catchCbs.push(cb)
//     return this
//   }
// }


// let promise2=new CustomPromise((resolve,reject)=>{
//   resolve(5)
// })

// promise2.then((data)=>{
//   console.log(data)
// })



// accepts array of promises if any one of the promise gets failed
// it will reject the entire promise
function PromiseAll(promiseArray){ 

  return new Promise((resolve,reject)=>{
    let results=[]
    promiseArray.forEach(async (promise)=>{
      try{
        results.push(await promise)
        if(results.length==promiseArray.length){
          resolve(results)
        }
      }
      catch(e){
        reject(e)
      }
    })
  })
  
}

// PromiseAll([Promise.resolve(5),Promise.resolve(2),Promise.resolve(25)]).then((data)=>{
//   console.log(data)
// })

// PromiseAll([Promise.resolve(5),Promise.reject("something went wrong"),Promise.resolve(25)]).then((data)=>{
//   console.log(data)
// }).catch((e)=>{
//   console.log(e)
// })


// accepts array of promises its done if any one of the promise gets resolved
//reject if all promise are rejected

// Promise.any([Promise.reject(2),Promise.reject(24)]).then(result => {
//   console.log(result);
// }).catch(error => {
//   console.log(error.errors);
// });

function PromiseAny(promiseArray){ 

  return new Promise((resolve,reject)=>{
    let results=[]
    promiseArray.forEach(async (promise)=>{
      try{        
        resolve(await promise)
      }
      catch(e){
        results.push(e)
        if(results.length==promiseArray.length){
          reject(results)
        }
        
      }
    })
  })
  
}

// PromiseAny([Promise.reject(2),Promise.reject(24)]).then(result => {
//   console.log(result);
// }).catch(error => {
//   console.log(error);
// });


// PromiseAny([Promise.resolve(2),Promise.resolve(26)]).then(result => {
//   console.log(result);
// }).catch(error => {
//   console.log(error);
// });


//This method waits for all promises to settle(resolve/reject) and returns their results as an array of objects

function PromiseAllSettled(promiseArray){ 

  return new Promise((resolve,reject)=>{
    let results=[]
    promiseArray.forEach(async (promise)=>{
      try{ 
        results.push(...[{status:"fullfilled",data:await promise}])      
        if(results.length==promiseArray.length){
          resolve(results)
        }
      }
      catch(e){
        results.push(...[{status:"rejected",data:e}])
        if(results.length==promiseArray.length){
          resolve(results)
        }
        
      }
    })
  })
}

// PromiseAllSettled([Promise.reject(2),Promise.resolve(26)]).then(result => {
//   console.table(result);
// }).catch(error => {
//   console.log(error);
// });


//Promise.race([promises]) – It waits for the first (quickest) promise to settle, and returns the result/error accordingly.

// Promise.race([Promise.reject(2),Promise.resolve(26)]).then(result => {
//   console.log(JSON.parse(result));
// }).catch(error => {
//   console.log('An Error Occured');
// });


function test(){
  lazyLoad().then((data)=>{
    console.log(data)
  })
  console.log("2222")
}

async function lazyLoad(){
  return await Promise.resolve(26)
}

test()

//2222
//26
