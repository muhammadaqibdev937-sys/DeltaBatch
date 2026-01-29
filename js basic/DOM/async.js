// //sync --> call stack -->man thread execution
// //async --> webAPI -->callback queue -->(empty callstack) --> call stack --> main thread

// //callback means kisi function ko chalatay waqt konsa function chalana hai callback

// function stepOne(cb)
// {
//     console.log("stepOne called");
//     cb()
// }

// function stepTwo(cb)
// {
//     console.log("stepTwo called");
//     cb()
// }


// function stepThree(cb)
// {
//     console.log("stepThree called");
//     cb()
// }
 
// stepOne(()=>{
//     stepTwo(()=>{
//         stepThree(()=>{
//             console.log("all functions done");
//         })
//     })
// })



//in promise only one thing is possible it resolve or reject both not possible
//   const pr=new Promise(function(res,rej){
//     console.log("step 1 is started");
//     rej()
//      res()
//   });
   
//   pr.then(()=>{
//     console.log("we win");
//   }).catch(()=>{
//     console.log("we lose");
//   })
 

//sync --> call stack -->man thread execution
//async --> webAPI -->callback queue -->(empty callstack) --> call stack --> main thread

//callback means kisi function ko chalatay waqt konsa function chalana hai callback

function stepOne()
{
    return new Promise((res,rej)=>{
        console.log("step 1 is done");
        res()
    })
}

function stepTwo()
{
    return new Promise((res,rej)=>{
            console.log("step 2 is done");
            res()
        })
}


function stepThree()
{
   return new Promise((res,rej)=>{
           console.log("step 3 is done");
           rej()
       })
}
 
// Step 1: resolve? yes → go to Step 2
// Step 2: resolve? yes → go to Step 3
// Step 3: resolve? no → go to catch → handle error


// Key Points

// .then() = handle success
// .catch() = handle any rejection
// Rejection stops the chain unless explicitly handled in .then
// This makes Promises perfect for sequential async tasks with error handling

// .finally() = “do this always at the end, success or failure.”
//run always if then() run soo finally() run also or if catch() run then finally() also run

//  stepOne().then(stepTwo(stepThree))
// stepOne().then(stepTwo).then(stepThree).catch((err)=>{
//    console.log("err occurred");
// });

// stepThree().then(stepOne).catch(()=>{
//     console.log("we lose");
// })




// const orderFood=new Promise((res,rej)=>{
//    setTimeout(()=>{
//      let random=Math.floor(Math.random()*3)
//      if(random>=4)
//      {
//     //    console.log("pizza delivered");
//            res()
//      }
//      else
//      {
//         rej()
//      }
      
//     },2000)

    
// })

// orderFood
// .then(()=>{
//     console.log("successfully delivered");
// })
// .catch(err=>{
//     console.log("delivered failed");
// })

/* PROMISE:
Three states:
pending:promise created
resolve:promise resolve
reject:promise reject

  ### 🔹 How data flows in Promises  
  * `resolve(value)` → sends **value** to `.then(value)`
  * `reject(error)` → sends **error** to `.catch(error)
  ## ✅ WAY 1: Pass value directly
  
  ### Flow:
  * Promise finishes work
  * `resolve(data)` or `reject(error)`
  * `.then(data)` or `.catch(error)` receives it
  * Display or use the received value
  
  ### Use when:
  
  * API data is needed
  * Error message/details are important
  
  ---
  ## ✅ WAY 2: No value passed
  ### Flow:
  * Promise only controls success/failure
  * `resolve()` or `reject()` (no data)
  * `.then()` / `.catch()` runs
  * Separate function handles display
  
  ### Use when:
  * Only success/fail matters
  * UI logic should stay outside Promise
  * 
  ### 🔑 Important Rules
  * A Promise can **resolve OR reject only once**
  * After resolve/reject → Promise is **finished**
  * Extra `resolve()` / `reject()` calls are ignored
  ---
  ### 🧠 Easy Memory Line
  > `resolve(data)` → `.then(data)`
  > `reject(error)` → `.catch(error)`
*/
