//Implement Caching
/*

*/

function CalCulateSum()
{
 let obj={};
 return function(x){
    if(obj[x])
    return obj[x];
    let count=0;
    for(let i=0;i<x;i++){
        count+=i;
    }
    obj[x]=count;
    return count;
 }
}
var cacheFunc=CalCulateSum();
console.time();
var res=cacheFunc(10000000);
console.timeEnd();

console.log('result is '+res);  

console.time();
var res=cacheFunc(10000000);
console.timeEnd();
console.log('result is '+res);  