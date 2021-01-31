function add(num1,num2=20){   //num2=20 is default value parameter not be pass but not show error because default value is working

    return num1 + num2;
}
const total=add(15);
console.log(total);

const result=add(15,30);
console.log(result);