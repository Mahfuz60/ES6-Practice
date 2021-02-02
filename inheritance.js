class Parent{
    constructor(){
        this.fatherName ="Mojibor Rahman";
    }
}
//inheritance used
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
        
    }
    //function used 
    getFullName(){
        return this.name+" "+this.fatherName;
    }
}
const baby=new Child("monem");
const baby2=new Child("Momu");
console.log(baby);
console.log(baby2);

console.log(baby.getFullName());
console.log(baby2.getFullName());