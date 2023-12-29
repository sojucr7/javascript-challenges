//A debounced function is a function that delays its execution a certain amount of milliseconds after the last call was received.


function debounce(fn,delay){
  let timeout
  return function(...args){
    if(timeout){
      clearTimeout(timeout)
    }

    timeout=setTimeout(()=>{
      fn(...args)
    },delay)
  }
}

// const debouncedLogHi = debounce(logHi, 1500)

// debouncedLogHi('soju')

// setTimeout(()=>{
//   debouncedLogHi('soju v')
// },3000)
// setTimeout(()=>{
//   debouncedLogHi('soju va')
// },6000)


function throttle(fn,delay){
  let lastCalled=null
  return function(...args){
    if(lastCalled==null || (Date.now()-lastCalled)>delay){
      fn(args)
      lastCalled=Date.now()
    }
  }
}

const logHi = (name) => console.log('Hi '+name)




const throttledLogHi = throttle(logHi, 1500)

throttledLogHi('soju')

setTimeout(()=>{
  throttledLogHi('soju v')
},3000)
setTimeout(()=>{
  throttledLogHi('soju va')
},6000)

//debounce example (debounce clear all timers, it only execute the last one)
// 1)Search Input (Typeahead):
// 2)validate onces typing is completed
// 3)Autosave after user types

//throttle
// 1)limit the number of button clicks on a given period
// 2)window resize do some computation


//for throttle user need to initiate again if prior call don't went through but in debounce it is guarantee to execute