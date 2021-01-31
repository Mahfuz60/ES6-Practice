//Const variable not be changes value

const hubby="My Testy Food";
console.log(hubby);

// hubby="My sweet Home";=>new variable value are not be working const used only time
// console.log(hubby);

const numbers=[50,60,70];
console.log(numbers);

numbers.push(98,86);
console.log(numbers);

numbers.pop([2]);
console.log(numbers);

// numbers=["ami","tmi","oni","apni"] =>new value not be working const is used only one time
// console.log(numbers);


//let variable changes the value  but scope ar baire kaj korbe na

let names="Mahfuz Alam";
console.log(names);

names="Ahmed Hridoy";
console.log(names);

names="Rafsan Faruk";
console.log(names);


//examples for scope working but scope out not working 

let sum=0;
for(let i=0; i<=10; i++){
    sum=sum+i;
    console.log(i); //its working 
}

//console.log(i);=>scope out not be working 