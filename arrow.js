// function doubleIT(num){
//     return num*2;
// }

// const doubleIT=function(num){
//     return num*2;
// }


//easy way arrow function used ES6

const doubleIT= num =>num*2;

const result =doubleIT(50);
console.log(result);

const add=(x,y)=>x+y;
const result2=add(20,30);
console.log(result2);

//kono parameter not be used
const string=()=>5;
const result3=string();
console.log(result3);


//Multi Work arrow function

const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;

}

const result4=doMath(50,20);
console.log(result4);
