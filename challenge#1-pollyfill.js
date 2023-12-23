//map is used to modify array,return new array so chainable
const array=[1,2,3,4,5]

if(!Array.prototype.customMap){
    Array.prototype.customMap=function(cb){
        const results=[]
        for(let i=0;i<this.length;i++){
            results.push(cb(this[i],i))
        }
        return results
    }
}

//usage
console.log(array.customMap((item,index)=>{
    return item*2
}))


//filter
//is used to filter result from array,return new array so chainable
if(!Array.prototype.customFilter){
    Array.prototype.customFilter=function(cb){
        const results=[]
        for(let i=0;i<this.length;i++){
           if(cb(this[i],i)){
                results.push(this[i])
           }
        }
        return results
    }
}

//usage
console.log(array.customFilter((item,index)=>{
    return item>=3
}))

//reduce
//used to reduce array to one single value,may not be chainable if it returns one single value
if(!Array.prototype.customReduce){
    Array.prototype.customReduce=function(cb,initialValue){
        let acc=initialValue
        for(let i=0;i<this.length;i++){
            acc=cb(acc,this[i],i,this)
        }
        return acc
    }
}

console.log(array.customReduce((acc,currentValue,currentIndex,array)=>{
    return acc+currentValue
},0))